import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsUpArrowCircleIcon],svg[bxs-up-arrow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2S2 6.486 2 12s4.486 10 10 10m0-15l5 5h-4v5h-2v-5H7z"></svg:path>`,
})
export class BxsUpArrowCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
