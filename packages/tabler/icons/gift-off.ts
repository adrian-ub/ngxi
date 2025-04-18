import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGiftOffIcon],svg[tabler-gift-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 8h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4m-4 0H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h4m4 4v9"></svg:path><svg:path d="M19 12v3m0 4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1-2.457-2.963m2.023-2Q7.277 3.001 7.5 3c1.974-.034 3.76 1.95 4.5 5c.74-3.05 2.526-5.034 4.5-5a2.5 2.5 0 1 1 0 5M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerGiftOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
