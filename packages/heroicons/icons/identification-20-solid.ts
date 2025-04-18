import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsIdentification20SolidIcon],svg[heroicons-identification-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm4 1.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2 3a4 4 0 0 0-3.665 2.395a.75.75 0 0 0 .416 1A9 9 0 0 0 7 14.5a9 9 0 0 0 3.249-.604a.75.75 0 0 0 .416-1.001A4 4 0 0 0 7 10.5m5-3.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m0 6.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m.75-4a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsIdentification20SolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
