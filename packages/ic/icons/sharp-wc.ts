import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpWcIcon],svg[ic-sharp-wc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 22v-7.5H4V7h7v7.5H9.5V22zM18 22v-6h3l-3-9h-3l-3 9h3v6zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2m9 0c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2"></svg:path>`,
})
export class IcSharpWcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
