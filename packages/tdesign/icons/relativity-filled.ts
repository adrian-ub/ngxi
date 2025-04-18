import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignRelativityFilledIcon],svg[tdesign-relativity-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2H2v13h5V7h8z"></svg:path><svg:path fill="currentColor" d="M15 9H9v6h6z"></svg:path><svg:path fill="currentColor" d="M9 17h8V9h5v13H9z"></svg:path>`,
})
export class TdesignRelativityFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
