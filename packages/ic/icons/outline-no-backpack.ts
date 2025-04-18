import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineNoBackpackIcon],svg[ic-outline-no-backpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.98 4.15c.01 0 .01-.01.02-.01V2h3v2h4V2h3v2.14c1.72.45 3 2 3 3.86v9.17l-2-2V8c0-1.1-.9-2-2-2H8.83zM14.83 12l1.67 1.67V12zm4.95 10.61l-.85-.85c-.28.15-.59.24-.93.24H6c-1.1 0-2-.9-2-2V8c0-.36.06-.69.15-1.02L1.39 4.22L2.8 2.81l18.38 18.38zM17.17 20l-6-6H7.5v-2h1.67L6 8.83V20z"></svg:path>`,
})
export class IcOutlineNoBackpackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
