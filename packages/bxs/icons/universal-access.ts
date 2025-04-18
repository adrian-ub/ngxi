import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsUniversalAccessIcon],svg[bxs-universal-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 3.33A1.67 1.67 0 1 1 10.33 7A1.67 1.67 0 0 1 12 5.33m3.33 12.5l-1.66.84l-1.39-3.89h-.56l-1.39 3.89l-1.66-.84l1.66-4.72v-1.66L7 10.33l.56-1.66l3.33 1.11h2.22l3.33-1.11l.56 1.66l-3.33 1.12v1.66z"></svg:path>`,
})
export class BxsUniversalAccessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
