import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesFileDocOutlineIcon],svg[bubbles-file-doc-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.247 23.248h-3a1.5 1.5 0 0 1-1.5-1.5v-19.5a1.5 1.5 0 0 1 1.5-1.5h10.629a1.5 1.5 0 0 1 1.061.439l5.871 5.872a1.5 1.5 0 0 1 .439 1.06v4.629"></svg:path><svg:path d="M20.247 8.248h-6a1.5 1.5 0 0 1-1.5-1.5v-6m-4.5 22.5a3 3 0 0 0 3-3v-1.5a3 3 0 0 0-3-3zm7.5-7.5a1.5 1.5 0 0 0-1.5 1.5v4.5a1.5 1.5 0 1 0 3 0v-4.5a1.5 1.5 0 0 0-1.5-1.5m7.5 0a3 3 0 0 0-3 3v1.5a3 3 0 0 0 3 3"></svg:path></svg:g>`,
})
export class BubblesFileDocOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
