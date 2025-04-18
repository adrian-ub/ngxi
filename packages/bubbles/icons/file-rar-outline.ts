import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesFileRarOutlineIcon],svg[bubbles-file-rar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.248 23.248v-7.5m0 0h1.125a1.875 1.875 0 0 1 0 3.75H8.248m3 3.75l-2.25-3.75m11.25 3.75v-7.5m0 0h1.125a1.875 1.875 0 0 1 0 3.75h-1.125m3 3.75l-2.25-3.75m-6.75 3.75v-6a1.5 1.5 0 1 1 3 0v6m-3-3h3"></svg:path><svg:path d="M5.248 23.248h-3a1.5 1.5 0 0 1-1.5-1.5v-19.5a1.5 1.5 0 0 1 1.5-1.5h10.629a1.5 1.5 0 0 1 1.06.439l5.872 5.872a1.5 1.5 0 0 1 .439 1.06v4.629"></svg:path><svg:path d="M20.248 8.248h-6a1.5 1.5 0 0 1-1.5-1.5v-6"></svg:path></svg:g>`,
})
export class BubblesFileRarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
