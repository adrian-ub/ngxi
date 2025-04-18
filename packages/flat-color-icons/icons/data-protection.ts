import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsDataProtectionIcon],svg[flat-color-icons-data-protection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D1C4E9" d="M38 7H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 12H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h25.1c1.3-1.3 4.9-.9 4.9-2v-6c0-1.1-.9-2-2-2m-3.6 12H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-2.4c0-3.1-2.5-5.6-5.6-5.6"></svg:path><svg:path fill="#009688" d="M46 25H32c-1.1 0-2 .9-2 2v11.8c0 1.3.6 2.4 1.6 3.2l7.4 5.5l7.4-5.5c1-.8 1.6-1.9 1.6-3.2V27c0-1.1-.9-2-2-2"></svg:path>`,
})
export class FlatColorIconsDataProtectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
