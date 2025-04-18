import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTextSmallCapsIcon],svg[carbon-text-small-caps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 27V15h-5v-2h12v2h-5v12z"></svg:path><svg:path fill="currentColor" d="M11 27V8H2V6h20v2h-9v19z"></svg:path>`,
})
export class CarbonTextSmallCapsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
