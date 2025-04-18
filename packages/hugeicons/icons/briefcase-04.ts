import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBriefcase04Icon],svg[hugeicons-briefcase-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.572 8.224c-.06-.494-.09-.74-.061-.942a1.49 1.49 0 0 1 1.05-1.228C3.753 6 3.995 6 4.477 6h15.048c.482 0 .723 0 .914.054c.555.159.967.64 1.051 1.228c.029.202-.001.448-.061.942c-.16 1.314-.239 1.97-.434 2.514c-.565 1.571-1.856 2.747-3.438 3.13c-.547.132-1.19.132-2.473.132H8.917c-1.284 0-1.926 0-2.473-.132c-1.582-.383-2.873-1.559-3.438-3.13c-.195-.543-.275-1.2-.434-2.514M12 11h.009"></svg:path><svg:path d="M3.5 12v3.02c0 3.055 0 4.582 1.106 5.531s2.888.949 6.45.949h1.888c3.562 0 5.343 0 6.45-.949c1.106-.949 1.106-2.476 1.106-5.531V12M16 6l-.088-.31c-.44-1.54-.66-2.31-1.184-2.75s-1.22-.44-2.611-.44h-.234c-1.391 0-2.087 0-2.61.44c-.525.44-.745 1.21-1.185 2.75L8 6"></svg:path></svg:g>`,
})
export class HugeiconsBriefcase04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
