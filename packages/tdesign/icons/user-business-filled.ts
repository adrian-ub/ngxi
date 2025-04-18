import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUserBusinessFilledIcon],svg[tdesign-user-business-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M8 14a5 5 0 0 0-5 5v3h18v-3a5 5 0 0 0-5-5h-1.382L12 19.236L9.382 14z"></svg:path>`,
})
export class TdesignUserBusinessFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
