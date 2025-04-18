import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibManjaroIcon],svg[cib-manjaro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v32h9V9h11.5V0zm11.5 11.5V32h9V11.5zM23 0v32h9V0z"></svg:path>`,
})
export class CibManjaroIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
