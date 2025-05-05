import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserWarning03Icon],svg[hugeicons-user-warning-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M15.5 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 7h-4a5 5 0 0 0-5 5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2a5 5 0 0 0-5-5m6-8v4m0 3v.01" color="currentColor"></svg:path>`,
})
export class HugeiconsUserWarning03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
