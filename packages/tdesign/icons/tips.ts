import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTipsIcon],svg[tdesign-tips-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2v17h-7.586L12 22.414L8.586 19H1V2zm-2 2H3v13h6.414L12 19.586L14.586 17H21z"></svg:path>`,
})
export class TdesignTipsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
