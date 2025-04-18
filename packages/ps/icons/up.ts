import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psUpIcon],svg[ps-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m44 273l156-139l156 137q4 4 15 4q10 0 17-6q13-15-2-30L200 79L14 241q-14 16-2 30q14 13 32 2"></svg:path>`,
})
export class PsUpIcon {
  readonly viewBox = input("0 0 400 448")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
