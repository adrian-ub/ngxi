import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsRemoveFileIcon],svg[lineicons-remove-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M38.6 22.1H25.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h13.2c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3"></svg:path><svg:path fill="currentColor" d="M49.5 1.8h-35c-3.4 0-6.1 2.7-6.1 6.1V40c0 1.5.6 2.9 1.7 3.9l18 17c1 1 2.3 1.5 3.7 1.5h17.6c3.4 0 6.1-2.7 6.1-6.1V7.9c.1-3.4-2.7-6.1-6-6.1M16.2 43.4h11.7c.5 0 .9.4.9.8v11zm34.9 12.7c0 .9-.7 1.6-1.6 1.6H33.3V44.2c0-2.9-2.4-5.3-5.4-5.3h-15v-31c0-.9.7-1.6 1.6-1.6h34.9c.9 0 1.6.7 1.6 1.6v48.2z"></svg:path>`,
})
export class LineiconsRemoveFileIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
