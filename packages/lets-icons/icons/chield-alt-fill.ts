import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldAltFillIcon],svg[lets-icons-chield-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m15 17.75l1.8-1.35A8 8 0 0 0 20 10V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4a8 8 0 0 0 3.2 6.4L9 17.75a5 5 0 0 0 6 0M10 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsChieldAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
