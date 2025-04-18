import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phEggThinIcon],svg[ph-egg-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20c-35.13 0-84 66.52-84 132a84 84 0 0 0 168 0c0-65.48-48.87-132-84-132m0 208a76.08 76.08 0 0 1-76-76c0-28.46 10-59.73 27.33-85.78C94.81 43 113.91 28 128 28s33.19 15 48.67 38.22C194 92.27 204 123.54 204 152a76.08 76.08 0 0 1-76 76"></svg:path>`,
})
export class PhEggThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
