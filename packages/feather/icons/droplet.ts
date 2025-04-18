import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherDropletIcon],svg[feather-droplet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></svg:path>`,
})
export class FeatherDropletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
