import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsObjectsColumnIcon],svg[meteor-icons-objects-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="7" height="9" x="3" y="3" rx="1"></svg:rect><svg:rect width="7" height="5" x="14" y="3" rx="1"></svg:rect><svg:rect width="7" height="5" x="3" y="16" rx="1"></svg:rect><svg:rect width="7" height="9" x="14" y="12" rx="1"></svg:rect></svg:g>`,
})
export class MeteorIconsObjectsColumnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
