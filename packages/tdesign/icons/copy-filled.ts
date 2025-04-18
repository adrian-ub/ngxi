import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCopyFilledIcon],svg[tdesign-copy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h13v5.5h-2V4H4v9h3.5v2H2zm7 7h13v13H9z"></svg:path>`,
})
export class TdesignCopyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
