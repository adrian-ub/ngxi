import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPrintFilledIcon],svg[tdesign-print-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16v4H4zm2 15h12v5H6z"></svg:path><svg:path fill="currentColor" d="M.5 8h23v11H20v-4H4v4H.5zM20 10.5h-2v2h2z"></svg:path>`,
})
export class TdesignPrintFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
