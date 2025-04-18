import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feEqualizerIcon],svg[fe-equalizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.17 7a3.001 3.001 0 0 1 5.66 0H21a1 1 0 0 1 0 2h-2.17a3.001 3.001 0 0 1-5.66 0H3a1 1 0 1 1 0-2zm-8 8a3.001 3.001 0 0 1 5.66 0H21a1 1 0 0 1 0 2H10.83a3.001 3.001 0 0 1-5.66 0H3a1 1 0 0 1 0-2zM16 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-8 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class FeEqualizerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
