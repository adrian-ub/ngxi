import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageLayoutLeftIcon],svg[mage-layout-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8.917 21.25V2.75"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageLayoutLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
