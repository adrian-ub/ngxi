import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBillIcon],svg[whh-bill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.31 768h-896q-26 0-45-18.5T.31 704V64q0-26 18.5-45t45.5-19h896q26 0 45 19t19 45v640q0 27-18.5 45.5t-45.5 18.5m0-512h-64q-53 0-90.5-37.5t-37.5-90.5V64h-512v64q0 53-37.5 90.5t-90.5 37.5h-64v256h64q53 0 90.5 37.5t37.5 90.5v64h512v-64q0-53 37.5-90.5t90.5-37.5h64zm-448 384q-80 0-136-75t-56-181t56-181t136-75t136 75t56 181t-56 181t-136 75"></svg:path>`,
})
export class WhhBillIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
