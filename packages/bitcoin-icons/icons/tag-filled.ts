import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsTagFilledIcon],svg[bitcoin-icons-tag-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.647 18.646l-5.293-5.292a.5.5 0 0 1 0-.708l6.5-6.5A.5.5 0 0 1 12.207 6h3.586l.069.005Q15.929 6 16 6a2 2 0 0 1 1.995 2.139l.005.068v3.586a.5.5 0 0 1-.146.353l-6.5 6.5a.5.5 0 0 1-.707 0M12 9.672a.5.5 0 0 0-1 0v5.656a.5.5 0 1 0 1 0zm-1.914 2.12a1 1 0 1 1-1.415 1.415a1 1 0 0 1 1.415-1.414m4.243 1.415a1 1 0 1 0-1.415-1.414a1 1 0 0 0 1.415 1.414" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsTagFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
