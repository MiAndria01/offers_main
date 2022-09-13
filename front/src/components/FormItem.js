import { Form } from "react-bootstrap";
import React, { useState } from "react";

export const FormItem =  ({ item, onChange, answer })  => {
  const [currentValue, setCurrentValue] = useState(answer || null);

  const handleChange = (value) => {
    setCurrentValue(value);
    onChange(value, item.value);
  }

   switch (item.type) {
      case 'text':
        return (
          <React.Fragment>
            <Form.Label>{item.label}</Form.Label>
            <Form.Control
              type="text"
              id={item.label}
              onChange={(e) => handleChange(e.target.value, item.value)}
              value={currentValue}
            />
          </React.Fragment>
        )        
        break;
        case 'date':
            return (
              <React.Fragment>
                <Form.Label>{item.label}</Form.Label>
                <Form.Control
                  type="date"
                  id={item.label}
                  onChange={(e) => onChange(e.target.value, item.value)}
                  value={currentValue}
                />
              </React.Fragment>
            )
        break;
        case 'time':
            return (
                <React.Fragment>
                <Form.Label>{item.label}</Form.Label>
                <Form.Control
                  type="time"
                  id={item.label}
                  onChange={(e) => onChange(e.target.value, item.value)}
                  value={currentValue}
                  />
                  </React.Fragment>
            )
            case 'number':
                return (
                    <React.Fragment>
                    <Form.Label>{item.label}</Form.Label>
                    <Form.Control
                      type="number"
                      id={item.label}
                      onChange={(e) => onChange(e.target.value, item.value)}
                      value={currentValue}
                      />
                      </React.Fragment>
                )

      
    }
  };