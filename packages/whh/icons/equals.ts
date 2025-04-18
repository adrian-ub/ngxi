import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhEqualsIcon],svg[whh-equals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.585 768h-896q-27 0-45.5-19t-18.5-45V576q0-27 18.5-45.5t45.5-18.5h896q27 0 45.5 18.5t18.5 45.5v128q0 27-18.5 45.5t-45.5 18.5m0-512h-896q-27 0-45.5-19t-18.5-45V64q0-27 18.5-45.5T64.585 0h896q27 0 45.5 18.5t18.5 45.5v128q0 26-18.5 45t-45.5 19"></svg:path>`,
})
export class WhhEqualsIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
