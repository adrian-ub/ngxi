import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCreativeCommonsNdFillIcon],svg[ri-creative-commons-nd-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m4 11H8v2h8zm0-4H8v2h8z"></svg:path>`,
})
export class RiCreativeCommonsNdFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
