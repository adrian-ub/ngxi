import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSignpostLightIcon],svg[ph-signpost-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m244.46 108l-33.62-37.37a14 14 0 0 0-10.4-4.63H134V32a6 6 0 0 0-12 0v34H40a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h82v66a6 6 0 0 0 12 0v-66h66.44a14 14 0 0 0 10.4-4.63L244.46 116a6 6 0 0 0 0-8m-42.54 37.35a2 2 0 0 1-1.48.66H40a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h160.44a2 2 0 0 1 1.48.66l30 33.34Z"></svg:path>`,
})
export class PhSignpostLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
