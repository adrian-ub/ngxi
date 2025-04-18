import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberFourThinIcon],svg[ph-number-four-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 164h-20V48a4 4 0 0 0-7.12-2.5l-96 120A4 4 0 0 0 64 172h92v36a4 4 0 0 0 8 0v-36h20a4 4 0 0 0 0-8m-28 0H72.32L156 59.4Z"></svg:path>`,
})
export class PhNumberFourThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
