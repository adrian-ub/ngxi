import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesZoomInOutlineIcon],svg[bubbles-zoom-in-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.875 9.811a9.063 9.063 0 1 1-18.127.002a9.063 9.063 0 0 1 18.127-.002M5.25 9.749h9m-4.5 4.5v-9m6.471 10.97l7.029 7.03"></svg:path>`,
})
export class BubblesZoomInOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
