import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPostageStampIcon],svg[mdi-postage-stamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v3.5c1.1 0 2 1.12 2 2.5s-.9 2.5-2 2.5v3c1.1 0 2 1.12 2 2.5s-.9 2.5-2 2.5V22h3.5c0-1.1 1.12-2 2.5-2s2.5.9 2.5 2h3c0-1.1 1.12-2 2.5-2s2.5.9 2.5 2H22v-3.5c-1.1 0-2-1.12-2-2.5s.9-2.5 2-2.5v-3c-1.1 0-2-1.12-2-2.5s.9-2.5 2-2.5V2h-3.5c0 1.1-1.12 2-2.5 2s-2.5-.9-2.5-2h-3c0 1.1-1.12 2-2.5 2s-2.5-.9-2.5-2zm4 4h12v12H6zm3 1a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m8 3l-3 3l-2-1l-5 5h10z"></svg:path>`,
})
export class MdiPostageStampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
