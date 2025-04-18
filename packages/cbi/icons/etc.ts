import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiEtcIcon],svg[cbi-etc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a10 10 0 1 1 10-10a10 10 0 0 1-10 10m4.208-10L12 9.619L7.792 12L12 14.363ZM12 15.154q-2.186-1.236-4.375-2.47c1.3 2.03 2.912 4.538 4.375 6.815c1.463-2.276 3.076-4.785 4.375-6.815q-2.188 1.233-4.375 2.47m0-6.3l4.375 2.446L12 4.5l-4.375 6.791L12 8.849Z"></svg:path>`,
})
export class CbiEtcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
