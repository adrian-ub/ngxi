import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsInCardinalIcon],svg[ph-arrows-in-cardinal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90.34 69.66a8 8 0 0 1 11.32-11.32L120 76.69V24a8 8 0 0 1 16 0v52.69l18.34-18.35a8 8 0 0 1 11.32 11.32l-32 32a8 8 0 0 1-11.32 0Zm43.32 84.68a8 8 0 0 0-11.32 0l-32 32a8 8 0 0 0 11.32 11.32L120 179.31V232a8 8 0 0 0 16 0v-52.69l18.34 18.35a8 8 0 0 0 11.32-11.32ZM232 120h-52.69l18.35-18.34a8 8 0 0 0-11.32-11.32l-32 32a8 8 0 0 0 0 11.32l32 32a8 8 0 0 0 11.32-11.32L179.31 136H232a8 8 0 0 0 0-16m-130.34 2.34l-32-32a8 8 0 0 0-11.32 11.32L76.69 120H24a8 8 0 0 0 0 16h52.69l-18.35 18.34a8 8 0 0 0 11.32 11.32l32-32a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhArrowsInCardinalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
