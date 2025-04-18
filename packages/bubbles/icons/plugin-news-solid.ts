import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginNewsSolidIcon],svg[bubbles-plugin-news-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M23.75 6.5v14.25a2.25 2.25 0 0 1-4.5 0V3.5a1.5 1.5 0 0 0-1.5-1.5h-15a1.5 1.5 0 0 0-1.5 1.5v17.25A2.25 2.25 0 0 0 3.5 23h18"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19.5 2.5h-18v20h18zM5 14.75a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm-.75 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75M5 5a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75v-6A.75.75 0 0 0 15.5 5zm.75 6V6.5h9V11z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class BubblesPluginNewsSolidIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
