import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRainbowIcon],svg[picon-rainbow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7c0-8 8-8 8 0H5c1-3-3-3-2 0m4 0C7 .5 1 .5 1 7h1c0-5 4-5 4 0"></svg:path>`,
})
export class PiconRainbowIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
