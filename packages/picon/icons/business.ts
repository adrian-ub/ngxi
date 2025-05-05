import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBusinessIcon],svg[picon-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4c-4-5.5 6-5.5 2 0M3 5h2v3l1-3l2 1v2H0V6l2-1l1 3"></svg:path>`,
})
export class PiconBusinessIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
