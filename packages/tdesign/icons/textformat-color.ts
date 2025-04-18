import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTextformatColorIcon],svg[tdesign-textformat-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.813 17.525l-.394-.919l-6-14L13.16 2h-2.32l-.26.606l-6 14l-.393.92l1.838.787l.394-.92l1.824-4.254h7.515l1.823 4.255l.394.92zM9.791 11.14H9.1L12 4.372l2.9 6.767H9.791M19 22h1v-2H4v2z"></svg:path>`,
})
export class TdesignTextformatColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
