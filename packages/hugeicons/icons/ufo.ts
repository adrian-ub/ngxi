import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUfoIcon],svg[hugeicons-ufo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 8c-2.989.556-5 1.595-5 2.785C2 12.56 6.477 14 12 14s10-1.44 10-3.215c0-1.19-2.011-2.23-5-2.785"></svg:path><svg:path d="M7.322 8.84c-.449-.625-.354-1.026-.164-1.827C7.685 4.79 9.62 3 12 3s4.315 1.79 4.842 4.013c.19.801.285 1.202-.164 1.827c-1.225 1.706-8.366 1.379-9.356 0M7 14l-2 7m12-7l2 7m-7-2h.009"></svg:path></svg:g>`,
})
export class HugeiconsUfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
