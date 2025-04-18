import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsHeadphone1Icon],svg[lineicons-headphone-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.25A8.75 8.75 0 0 0 3.25 12v5.25A2.25 2.25 0 0 0 5.5 19.5h1a2.25 2.25 0 0 0 2.25-2.25v-3.5A2.25 2.25 0 0 0 6.5 11.5h-1q-.392.002-.74.125a7.25 7.25 0 0 1 14.48 0a2.3 2.3 0 0 0-.74-.125h-1a2.25 2.25 0 0 0-2.25 2.25v3.5a2.25 2.25 0 0 0 2.25 2.25h1a2.25 2.25 0 0 0 2.25-2.25V12A8.75 8.75 0 0 0 12 3.25m7.25 10.486v3.514a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 .75.736M6.5 13a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1-.75-.75v-3.5A.75.75 0 0 1 5.5 13z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsHeadphone1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
