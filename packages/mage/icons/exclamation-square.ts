import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageExclamationSquareIcon],svg[mage-exclamation-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.958 7.563v6.166"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17.139h-.009"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" stroke-width="1.5" rx="6"></svg:rect></svg:g>`,
})
export class MageExclamationSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
