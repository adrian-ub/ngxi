import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsTrustpilotIcon],svg[simple-icons-trustpilot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.227 16.67l2.19 6.742l-7.413-5.388zM24 9.31h-9.165L12.005.589l-2.84 8.723L0 9.3l7.422 5.397l-2.84 8.714l7.422-5.388l4.583-3.326z"></svg:path>`,
})
export class SimpleIconsTrustpilotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
