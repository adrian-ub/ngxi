import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCartOffIcon],svg[pepicons-pop-cart-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M16.513 6H7.487A2.5 2.5 0 0 0 5.05 9.057l.913 4A2.5 2.5 0 0 0 8.401 15H15.6a2.5 2.5 0 0 0 2.437-1.943l.913-4A2.5 2.5 0 0 0 16.513 6M7.376 8.013A.5.5 0 0 1 7.487 8h9.026a.5.5 0 0 1 .487.611l-.913 4A.5.5 0 0 1 15.6 13H8.4a.5.5 0 0 1-.487-.389l-.913-4a.5.5 0 0 1 .376-.598" clip-rule="evenodd"></svg:path><svg:path d="M3.49 2H2a1 1 0 0 1 0-2h2.29a1 1 0 0 1 .975.78l2.71 12a1 1 0 1 1-1.95.44zM10 17.25a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0m7 0a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopCartOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
