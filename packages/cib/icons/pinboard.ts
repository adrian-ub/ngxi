import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibPinboardIcon],svg[cib-pinboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.802 19.448l-6.01 6.151l.958-5.417l-8.177-10.089L0 10.338L10.104-.001v3.938l9.62 8.859l6.021-1.474l-6.255 6.646L32 31.999z"></svg:path>`,
})
export class CibPinboardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
