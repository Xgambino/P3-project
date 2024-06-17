import { Button, Container, Form } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from '../components/Navbar';
import { useEffect, useState } from "react";
import { BASE_URL } from '../utils';
import video1 from '/home/gambi/P3/P3-project/front-end/src/assets/video1.mp4'
import "./AddToCatalogue.css";


const schema = z.object({
  name: z
    .string({
      required_error: "Username is required",
    })

    .min(1, { message: "Username is required" }),

  description: z
    .string({
      required_error: "Description is required",
    })

    .min(1, { message: "Description is required" }),
  image: z
    .string({
      required_error: "Image is required",
    })
    .min(1, { message: "Image is required" })
    .url({ message: "Enter a valid image url" }),

  date_published: z.string({
    required_error: "Date Published is required",
  }),
});

const AddToCatalogue = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/models`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Update state or perform other actions with fetched data if needed
      })
      .catch((err) => console.log(err));
  }, []);
  

  const { control, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      description: "",
      image: "",
      owner: "",
      model_id: "",
      date_published: "",
    },
  });

  console.log(formState.errors);

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
    <video className="video-background" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="center-container">
    <Container>
      <Navbar />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" {...field} />
              {fieldState.invalid && (
                <Form.Text className="text-danger">
                  {fieldState.error.message}
                </Form.Text>
              )}
            </Form.Group>
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({ field, fieldState }) => (
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Description"
                {...field}
              />

              {fieldState.invalid && (
                <Form.Text className="text-danger">
                  {fieldState.error.message}
                </Form.Text>
              )}
            </Form.Group>
          )}
        />
        <Controller
          name="image"
          control={control}
          render={({ field, fieldState }) => (
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="image" placeholder="Image" {...field} />

              {fieldState.invalid && (
                <Form.Text className="text-danger">
                  {fieldState.error.message}
                </Form.Text>
              )}
            </Form.Group>
          )}
        />

        <Controller
          name="date_published"
          control={control}
          render={({ field, fieldState }) => (
            <Form.Group className="mb-3">
              <Form.Label>Date published</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="Date published"
                {...field}
              />

              {fieldState.invalid && (
                <Form.Text className="text-danger">
                  {fieldState.error.message}
                </Form.Text>
              )}
            </Form.Group>
          )}
        />
        <Form.Check
          required
          name="terms"
          label="Agree to terms and conditions"
          feedbackType="invalid"
          id="validationFormik106"
          feedbackTooltip
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    </div>
    </>
  );
};

export default AddToCatalogue;
