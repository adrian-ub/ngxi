import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsMcafeeIcon],svg[simple-icons-mcafee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.823L1.58 0v19.177L12 24l10.42-4.823V0zm6.172 11.626l-6.143 2.843l-6.144-2.843V6.69l6.144 2.842l6.143-2.842z"></svg:path>`,
})
export class SimpleIconsMcafeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
