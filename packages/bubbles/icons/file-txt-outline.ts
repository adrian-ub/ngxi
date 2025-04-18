import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesFileTxtOutlineIcon],svg[bubbles-file-txt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.247 23.248h-3a1.5 1.5 0 0 1-1.5-1.5v-19.5a1.5 1.5 0 0 1 1.5-1.5h10.629a1.5 1.5 0 0 1 1.06.439l5.872 5.872a1.5 1.5 0 0 1 .439 1.06v4.629"></svg:path><svg:path d="M20.247 8.248h-6a1.5 1.5 0 0 1-1.5-1.5v-6m9 22.5v-7.5m-1.5 0h3m-13.5 7.5v-7.5m-1.5 0h3m3 0l3 7.5m0-7.5l-3 7.5"></svg:path></svg:g>`,
})
export class BubblesFileTxtOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
