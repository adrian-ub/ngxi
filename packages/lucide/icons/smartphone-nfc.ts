import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSmartphoneNfcIcon],svg[lucide-smartphone-nfc-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="7" height="12" x="2" y="6" rx="1"></svg:rect><svg:path d="M13 8.32a7.43 7.43 0 0 1 0 7.36m3.46-9.47a11.76 11.76 0 0 1 0 11.58M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"></svg:path></svg:g>`,
})
export class LucideSmartphoneNfcIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
