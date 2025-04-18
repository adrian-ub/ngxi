import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRedoIcon],svg[hugeicons-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.758 21.799c-5.38 0-9.75-4.37-9.75-9.75s4.37-9.75 9.75-9.75c3.03 0 5.85 1.39 7.69 3.75c.03-.29.06-.62.09-1.01l.18-2.05c.04-.41.4-.71.81-.68c.41.04.72.4.68.81l-.18 2.05c-.13 1.62-.2 2.52-.91 3.14c-.74.62-1.67.54-3.19.38l-2.04-.21a.75.75 0 0 1-.67-.82c.04-.41.41-.72.82-.67l2.04.21c.6.06 1.07.11 1.42.11a8.24 8.24 0 0 0-6.75-3.5c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25s8.25-3.7 8.25-8.25c0-.41.34-.75.75-.75s.75.34.75.75c0 5.38-4.37 9.75-9.75 9.75z" color="currentColor"></svg:path>`,
})
export class HugeiconsRedoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
