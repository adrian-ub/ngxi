import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMessageCircleCodeIcon],svg[tabler-message-circle-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.036 19.933A9.8 9.8 0 0 1 7.7 19L3 20l1.3-3.9C1.976 12.663 2.874 8.228 6.4 5.726c3.526-2.501 8.59-2.296 11.845.48c2.128 1.815 3.053 4.361 2.694 6.81M20 21l2-2l-2-2m-3 0l-2 2l2 2"></svg:path>`,
})
export class TablerMessageCircleCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
