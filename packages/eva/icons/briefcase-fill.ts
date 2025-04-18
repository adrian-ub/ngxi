import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaBriefcaseFillIcon],svg[eva-briefcase-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21h10V7h-1V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H7Zm3-15.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4ZM19 7v14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3M5 7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3Z"></svg:path>`,
})
export class EvaBriefcaseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
