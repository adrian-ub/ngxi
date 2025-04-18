import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsExpandRightLightIcon],svg[lets-icons-expand-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m9 6l6 6l-6 6"></svg:path>`,
})
export class LetsIconsExpandRightLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
