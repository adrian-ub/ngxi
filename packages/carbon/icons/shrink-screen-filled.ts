import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonShrinkScreenFilledIcon],svg[carbon-shrink-screen-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="15" height="10" x="15" y="18" fill="currentColor" rx="2"></svg:rect><svg:path fill="currentColor" d="M12 10v3.586L7.707 9.293l-1.414 1.414L10.586 15H7v2h7v-7z"></svg:path><svg:path fill="currentColor" d="M13 22H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v9h-2V7H4v13h9Z"></svg:path>`,
})
export class CarbonShrinkScreenFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
