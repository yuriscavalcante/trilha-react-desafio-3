import React from "react";
import { Header } from "../../components/Header";
import {
  Column,
  Container,
  SubtitleRegister,
  Title,
  TitleRegister,
  Wrapper,
} from "./styles";
import { MdEmail, MdLock, MdPerson2 } from "react-icons/md";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });
  const onSubmit = async (formData) => {
    console.log(formData);
  };
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            {" "}
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleRegister>Comece agora grátis</TitleRegister>
            <SubtitleRegister>
              Crie sua conta e make the change._
            </SubtitleRegister>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Nome completo"
                leftIcon={<MdPerson2 />}
                name="full_name"
                control={control}
              />
              {errors.email && <span>E-mail é obrigatório</span>}
              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
              />
              {errors.email && <span>E-mail é obrigatório</span>}
              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
              />
              {errors.senha && <span>Senha é obrigatório</span>}
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Register };
