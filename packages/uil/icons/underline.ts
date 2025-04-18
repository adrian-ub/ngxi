import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilUnderlineIcon],svg[uil-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15.5a5 5 0 0 0 5-5v-5a1 1 0 0 0-2 0v5a3 3 0 0 1-6 0v-5a1 1 0 0 0-2 0v5a5 5 0 0 0 5 5m5 2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilUnderlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
