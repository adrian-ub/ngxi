import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginNewsOutlineIcon],svg[bubbles-plugin-news-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M23.75 6.5v14.25a2.25 2.25 0 0 1-4.5 0V3.5a1.5 1.5 0 0 0-1.5-1.5h-15a1.5 1.5 0 0 0-1.5 1.5v17.25A2.25 2.25 0 0 0 3.5 23h18M5 15.5h10.5M5 18.5h6"></svg:path><svg:path d="M5 5.75h10.5v6H5z"></svg:path></svg:g>`,
})
export class BubblesPluginNewsOutlineIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
