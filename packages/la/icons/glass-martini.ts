import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laGlassMartiniIcon],svg[la-glass-martini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v1.34l10 13V26h-5v2h12v-2h-5v-6.66l10-13V5zm3.031 2H23.97l-1.54 2H11.92l1.54 2h7.434L16 17.36z"></svg:path>`,
})
export class LaGlassMartiniIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
