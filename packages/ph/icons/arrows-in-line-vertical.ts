import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsInLineVerticalIcon],svg[ph-arrows-in-line-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8m-101.66-26.34a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32L136 76.69V16a8 8 0 0 0-16 0v60.69l-18.34-18.35a8 8 0 0 0-11.32 11.32Zm11.32 52.68a8 8 0 0 0-11.32 0l-32 32a8 8 0 0 0 11.32 11.32L120 179.31V240a8 8 0 0 0 16 0v-60.69l18.34 18.35a8 8 0 0 0 11.32-11.32Z"></svg:path>`,
})
export class PhArrowsInLineVerticalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
