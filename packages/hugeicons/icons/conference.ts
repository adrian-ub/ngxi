import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsConferenceIcon],svg[hugeicons-conference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19 15V9c0-2.828 0-4.243-.879-5.121C17.243 3 15.828 3 13 3h-2c-2.828 0-4.243 0-5.121.879C5 4.757 5 6.172 5 9v6c0 2.828 0 4.243.879 5.121C6.757 21 8.172 21 11 21h2c2.828 0 4.243 0 5.121-.879C19 19.243 19 17.828 19 15m3-8v10M2 7v10"></svg:path><svg:path d="M14 8.509a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-5.956 7.223c1.059-1.63 2.74-2.24 3.955-2.238c1.217 0 2.848.609 3.906 2.238c.069.106.088.235.026.345c-.248.439-1.016 1.31-1.571 1.369c-.638.067-2.306.077-2.36.077c-.052 0-1.772-.01-2.41-.077c-.555-.06-1.324-.93-1.571-1.37c-.062-.109-.043-.238.025-.344"></svg:path></svg:g>`,
})
export class HugeiconsConferenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
