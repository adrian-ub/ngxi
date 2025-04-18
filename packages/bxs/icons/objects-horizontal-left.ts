import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsObjectsHorizontalLeftIcon],svg[bxs-objects-horizontal-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h2v20H2z"></svg:path><svg:rect width="16" height="6" x="6" y="13" fill="currentColor" rx="1"></svg:rect><svg:rect width="12" height="6" x="6" y="5" fill="currentColor" rx="1"></svg:rect>`,
})
export class BxsObjectsHorizontalLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
