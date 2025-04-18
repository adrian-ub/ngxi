import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ChevronCompactLeftIcon],svg[f7-chevron-compact-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.395 47.395c.351.914 1.148 1.5 2.015 1.5c1.383 0 2.414-1.008 2.414-2.391c0-.703-.398-1.617-.61-2.227l-6.421-16.289L33.215 11.7c.21-.61.61-1.547.61-2.226c0-1.36-1.032-2.368-2.415-2.368c-.867 0-1.664.563-2.015 1.477l-6.282 15.984c-.422 1.079-.937 2.391-.937 3.422s.515 2.344.937 3.422Z"></svg:path>`,
})
export class F7ChevronCompactLeftIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
