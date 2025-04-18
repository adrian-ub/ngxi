import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMessageCircleShareIcon],svg[tabler-message-circle-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.58 19.963A9.9 9.9 0 0 1 7.7 19L3 20l1.3-3.9C1.976 12.663 2.874 8.228 6.4 5.726c3.526-2.501 8.59-2.296 11.845.48c2.13 1.817 3.055 4.368 2.692 6.82M16 22l5-5m0 4.5V17h-4.5"></svg:path>`,
})
export class TablerMessageCircleShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
