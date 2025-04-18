import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceSmileyIcon],svg[guidance-smiley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8.5 7v3m7-3v3M12 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5S22.5 6.201 22.5 12S17.799 22.5 12 22.5Zm.367-9.5h-.735c-2.055 0-4.078-.516-5.882-1.5H5.5v.5a6.5 6.5 0 1 0 13 0v-.5h-.25a12.3 12.3 0 0 1-5.882 1.5Z"></svg:path>`,
})
export class GuidanceSmileyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
