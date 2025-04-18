import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsLightningIcon],svg[simple-icons-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0L1.75 6v12L12 24l10.25-6V6zm-1.775 18l1.08-4.657l-2.428-2.397L13.79 6l-1.082 4.665l2.414 2.384z"></svg:path>`,
})
export class SimpleIconsLightningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
