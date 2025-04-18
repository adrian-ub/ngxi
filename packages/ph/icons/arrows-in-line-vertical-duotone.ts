import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsInLineVerticalDuotoneIcon],svg[ph-arrows-in-line-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 32v192a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V32a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-101.66-26.34a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32L136 76.69V16a8 8 0 0 0-16 0v60.69l-18.34-18.35a8 8 0 0 0-11.32 11.32Zm11.32 52.68a8 8 0 0 0-11.32 0l-32 32a8 8 0 0 0 11.32 11.32L120 179.31V240a8 8 0 0 0 16 0v-60.69l18.34 18.35a8 8 0 0 0 11.32-11.32Z"></svg:path></svg:g>`,
})
export class PhArrowsInLineVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
