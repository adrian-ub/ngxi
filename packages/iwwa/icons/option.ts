import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iwwaOptionIcon],svg[iwwa-option-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M23.112 9.315a3.113 3.113 0 1 1-6.226.002a3.113 3.113 0 0 1 6.226-.002"></svg:path><svg:circle cx="20" cy="19.999" r="3.112"></svg:circle><svg:circle cx="20" cy="30.685" r="3.112"></svg:circle></svg:g>`,
})
export class IwwaOptionIcon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
