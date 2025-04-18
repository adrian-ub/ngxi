import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTrophyFillIcon],svg[ri-trophy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.005 16.94v2.063h5v2h-12v-2h5V16.94a8 8 0 0 1-7-7.938v-6h16v6a8 8 0 0 1-7 7.938m-12-11.937h2v4h-2zm20 0h2v4h-2z"></svg:path>`,
})
export class RiTrophyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
