import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDropletIcon],svg[picon-droplet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1c7 8-7 8 0 0M3 4v1h1V3"></svg:path>`,
})
export class PiconDropletIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
