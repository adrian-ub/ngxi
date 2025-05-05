import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconScaleIcon],svg[picon-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0c0 3-8 3-8 0m3 4V2h2v2M0 8c0-6 8-6 8 0M7 7c0-4-6-4-6 0m2 0L2 5l3 2"></svg:path>`,
})
export class PiconScaleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
