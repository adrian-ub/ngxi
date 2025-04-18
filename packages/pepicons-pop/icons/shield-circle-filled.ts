import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopShieldCircleFilledIcon],svg[pepicons-pop-shield-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopShieldCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M14.335 6.03a3 3 0 0 0-2.67 0L8.029 7.836c-.95.472-1.537 1.374-1.528 2.344c.016 1.774.21 4.03.9 5.477c.766 1.607 2.65 3.272 4.216 4.44c.83.619 1.936.619 2.766 0c1.566-1.168 3.45-2.833 4.216-4.44c.69-1.447.884-3.703.9-5.477c.009-.97-.579-1.872-1.528-2.344zm-3.56-1.791a5 5 0 0 1 4.45 0l3.636 1.806c1.552.772 2.654 2.329 2.638 4.153c-.016 1.785-.197 4.439-1.095 6.32c-.998 2.094-3.254 4.01-4.825 5.183a4.29 4.29 0 0 1-5.158 0c-1.571-1.172-3.827-3.09-4.825-5.183c-.898-1.881-1.079-4.535-1.095-6.32c-.016-1.824 1.086-3.381 2.638-4.153z" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopShieldCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopShieldCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
