import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconPersonAdd16Icon],svg[octicon-person-add-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.9 8.548h-.001a5.53 5.53 0 0 1 3.1 4.659a.75.75 0 1 1-1.498.086A4.01 4.01 0 0 0 5.5 9.5a4.01 4.01 0 0 0-4.001 3.793a.75.75 0 1 1-1.498-.085a5.53 5.53 0 0 1 3.1-4.66a3.5 3.5 0 1 1 4.799 0M13.25 0a.75.75 0 0 1 .75.75V2h1.25a.75.75 0 0 1 0 1.5H14v1.25a.75.75 0 0 1-1.5 0V3.5h-1.25a.75.75 0 0 1 0-1.5h1.25V.75a.75.75 0 0 1 .75-.75M5.5 4a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 4"></svg:path>`,
})
export class OcticonPersonAdd16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
