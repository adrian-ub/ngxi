import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesTextFormatOutlineIcon],svg[bubbles-text-format-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M.75.748h4.5v4.5H.75zm0 18h4.5v4.5H.75zm16.5-18h4.5v4.5h-4.5zm0 18h4.5v4.5h-4.5zm-12-16.5h12m3 3v13.5m-3 3h-12m-3-3v-13.5M6.75 9A2.25 2.25 0 0 1 9 6.748h4.5A2.25 2.25 0 0 1 15.75 9m-4.5-2.252v10.5m-3.031 0h6"></svg:path>`,
})
export class BubblesTextFormatOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
