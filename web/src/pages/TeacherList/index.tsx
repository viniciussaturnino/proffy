import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Select from '../../components/Select';
import Input from '../../components/Input';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis.">
                <form id="search-teachers">
                <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Química', label: 'Química' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'História', label: 'História' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Inglês', label: 'Inglês' },
                            { value: 'Sociologia', label: 'Sociologia' },
                            { value: 'Filosofia', label: 'Filosofia' },
                            { value: 'Artes', label: 'Artes' },
                        ]}
                    />

                    <Select
                        name="week_day"
                        label="Dia da semana"
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />

                    <Input type="time" name="time" label="Hora" />
                </form>
            </ PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;