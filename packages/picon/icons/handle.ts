import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHandleIcon],svg[picon-handle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3v2h2V3M1 0v2h2V0m2 0v2h2V0M5 3v2h2V3M5 6v2h2V6M1 6v2h2V6"></svg:path>`,
})
export class PiconHandleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
