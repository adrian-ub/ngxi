import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsItalicSolidIcon],svg[heroicons-italic-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.497 3.744a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-3.275l-5.357 15.002h2.632a.75.75 0 1 1 0 1.5h-7.5a.75.75 0 1 1 0-1.5h3.275l5.357-15.002h-2.632a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsItalicSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
