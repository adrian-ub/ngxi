import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLabelOffRoundedIcon],svg[material-symbols-light-label-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.733 16.248L6.6 5h8.227q.379 0 .727.165q.348.164.565.462l4.135 5.385q.342.448.342.988t-.342.989zM4.616 19q-.672 0-1.144-.472T3 17.385V6.615q0-.178.043-.349t.11-.312l-2.1-2.1q-.14-.14-.15-.344t.15-.364t.355-.16t.354.16L20.854 22.24q.14.14.153.34t-.153.367q-.16.16-.354.16t-.354-.16l-4.275-4.275q-.115.152-.282.24t-.362.089z"></svg:path>`,
})
export class MaterialSymbolsLightLabelOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
