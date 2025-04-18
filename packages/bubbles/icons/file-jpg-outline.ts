import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesFileJpgOutlineIcon],svg[bubbles-file-jpg-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.25 23.25h-3a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5 0 0 1 1.5-1.5h10.629a1.5 1.5 0 0 1 1.06.439l5.872 5.872a1.5 1.5 0 0 1 .439 1.06v4.629"></svg:path><svg:path d="M20.25 8.25h-6a1.5 1.5 0 0 1-1.5-1.5v-6m-1.5 15v6a1.5 1.5 0 0 1-1.5 1.5h-1.5m6 0v-7.5m0 0H15a2.25 2.25 0 0 1 0 4.5h-.75m8.25 0h.75v1.5a1.5 1.5 0 1 1-3 0v-4.5a1.5 1.5 0 0 1 1.5-1.5h1.5"></svg:path></svg:g>`,
})
export class BubblesFileJpgOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
