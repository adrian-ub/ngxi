import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMobileAddIcon],svg[carbon-mobile-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 24h-4v-4h-2v4h-4v2h4v4h2v-4h4z"></svg:path><svg:path fill="currentColor" d="M10 28V10h12v7h2V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h6v-2Zm0-22h12v2H10Z"></svg:path>`,
})
export class CarbonMobileAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
