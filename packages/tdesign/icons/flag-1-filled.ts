import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFlag1FilledIcon],svg[tdesign-flag-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.414 2H3v5.5h8.414l2 2h6.014l2-5.5h-8.014zm8.014 9.5h-6.842l-2-2H3v13h2V15h5.586l2 2h8.842z"></svg:path>`,
})
export class TdesignFlag1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
