import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMessageCircleXIcon],svg[tabler-message-circle-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.593 19.855A9.96 9.96 0 0 1 7.7 19L3 20l1.3-3.9C1.976 12.663 2.874 8.228 6.4 5.726c3.526-2.501 8.59-2.296 11.845.48c2.128 1.816 3.053 4.363 2.693 6.813M22 22l-5-5m0 5l5-5"></svg:path>`,
})
export class TablerMessageCircleXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
