import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldLightIcon],svg[lets-icons-chield-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M18.515 5.248L12.591 2.71a1.5 1.5 0 0 0-1.182 0L5.485 5.25a1.5 1.5 0 0 0-.9 1.544l.651 5.862a6.5 6.5 0 0 0 2.3 4.275l3.504 2.92a1.5 1.5 0 0 0 1.92 0l3.505-2.92a6.5 6.5 0 0 0 2.299-4.275l.651-5.862a1.5 1.5 0 0 0-.9-1.545Z"></svg:path>`,
})
export class LetsIconsChieldLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
