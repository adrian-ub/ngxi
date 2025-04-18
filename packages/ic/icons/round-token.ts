import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundTokenIcon],svg[ic-round-token-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.97 2.54c-.6-.34-1.34-.34-1.94 0l-7 3.89L9.1 9.24C9.83 8.48 10.86 8 12 8s2.17.48 2.9 1.24l5.07-2.82zM10 12c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2M3 8.14l5.13 2.85c-.09.32-.13.66-.13 1.01c0 1.86 1.27 3.43 3 3.87v5.57l-6.97-3.87A1.99 1.99 0 0 1 3 15.82zm10 13.3v-5.57c1.73-.44 3-2.01 3-3.87c0-.35-.04-.69-.13-1.01L21 8.14v7.68c0 .73-.39 1.4-1.03 1.75z"></svg:path>`,
})
export class IcRoundTokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
