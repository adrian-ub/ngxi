import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsObjectsVerticalTopIcon],svg[bxs-objects-vertical-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v2H2z"></svg:path><svg:rect width="6" height="16" x="5" y="6" fill="currentColor" rx="1"></svg:rect><svg:rect width="6" height="12" x="13" y="6" fill="currentColor" rx="1"></svg:rect>`,
})
export class BxsObjectsVerticalTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
