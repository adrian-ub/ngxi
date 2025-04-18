import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTextBoldIcon],svg[carbon-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.25 25H9V7h8.5a5.25 5.25 0 0 1 4 8.65A5.25 5.25 0 0 1 18.25 25M12 22h6.23a2.25 2.25 0 1 0 0-4.5H12Zm0-7.5h5.5a2.25 2.25 0 1 0 0-4.5H12Z"></svg:path>`,
})
export class CarbonTextBoldIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
