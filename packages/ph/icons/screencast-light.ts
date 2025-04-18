import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phScreencastLightIcon],svg[ph-screencast-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 56v144a14 14 0 0 1-14 14h-72a6 6 0 0 1 0-12h72a2 2 0 0 0 2-2V56a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v40a6 6 0 0 1-12 0V56a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14M32 186a6 6 0 0 0 0 12a10 10 0 0 1 10 10a6 6 0 0 0 12 0a22 22 0 0 0-22-22m0-32a6 6 0 0 0 0 12a42 42 0 0 1 42 42a6 6 0 0 0 12 0a54.06 54.06 0 0 0-54-54m0-32a6 6 0 0 0 0 12a74.09 74.09 0 0 1 74 74a6 6 0 0 0 12 0a86.1 86.1 0 0 0-86-86"></svg:path>`,
})
export class PhScreencastLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
