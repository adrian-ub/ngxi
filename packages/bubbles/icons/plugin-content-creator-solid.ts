import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginContentCreatorSolidIcon],svg[bubbles-plugin-content-creator-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 1.5v2m-2 2h-2m2 14h-2m18-18v2m-14 18v2m14-2v2m4-18h-2m2 14h-2m-16-14h14v14h-14z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 5.5h14v14h-14zm3.75 3.75v4.5h1.5V10.5a.75.75 0 0 1 .75-.75h1.25v-.5zm5 .5V9A1.25 1.25 0 0 0 13 7.75H9A1.25 1.25 0 0 0 7.75 9v5A1.25 1.25 0 0 0 9 15.25h1.75v1.25c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-.75-.75zm-.75 1.5h-1.25v4.5h3.5v-4.5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class BubblesPluginContentCreatorSolidIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
