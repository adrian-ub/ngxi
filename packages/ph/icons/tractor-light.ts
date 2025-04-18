import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTractorLightIcon],svg[ph-tractor-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 166.12V134a13.91 13.91 0 0 0-10-13.41h-.15L190 110.24V72a6 6 0 0 0-12 0v35l-28-7.58V54h10a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12h10v36H40a6 6 0 0 0 0 12h28a70.08 70.08 0 0 1 70 70v12a6 6 0 0 0 6 6h34.06A34 34 0 1 0 238 166.12M68 90h-6V54h76v75.34A82 82 0 0 0 68 90m82 82v-60.16l74.63 20.21A2 2 0 0 1 226 134v23a34 34 0 0 0-46.5 21H150Zm62 38a22 22 0 1 1 22-22a22 22 0 0 1-22 22M68 122a50 50 0 1 0 50 50a50.06 50.06 0 0 0-50-50m0 88a38 38 0 1 1 38-38a38 38 0 0 1-38 38m10-38a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhTractorLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
