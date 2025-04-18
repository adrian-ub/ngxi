import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginTranslatorOutlineIcon],svg[bubbles-plugin-translator-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4.5 8.75v-3a1.5 1.5 0 0 1 3 0v3m-3-1.5h3m9 3.75v1.5m-3 0h6m-1.5 0S16.5 17 13.5 17"></svg:path><svg:path d="M16.5 15.267a3.93 3.93 0 0 0 3 1.733"></svg:path><svg:path d="M11.25 19.25a1.5 1.5 0 0 1-1.5-1.5v-7.5a1.5 1.5 0 0 1 1.5-1.5h10.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-1.5v4.5l-4.5-4.5z"></svg:path><svg:path d="m6.75 13.25l-3 3v-4.5h-1.5a1.5 1.5 0 0 1-1.5-1.5v-7.5a1.5 1.5 0 0 1 1.5-1.5h10.5a1.5 1.5 0 0 1 1.5 1.5v3"></svg:path></svg:g>`,
})
export class BubblesPluginTranslatorOutlineIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
