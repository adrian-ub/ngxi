import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilFolderNetworkIcon],svg[uil-folder-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18h-6.18A3 3 0 0 0 13 16.18V14h3.67A2.34 2.34 0 0 0 19 11.67V6.33A2.34 2.34 0 0 0 16.67 4h-4l-.13-.41A2.34 2.34 0 0 0 10.37 2h-3A2.34 2.34 0 0 0 5 4.33v7.34A2.34 2.34 0 0 0 7.33 14H11v2.18A3 3 0 0 0 9.18 18H3a1 1 0 0 0 0 2h6.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2M7.33 12a.33.33 0 0 1-.33-.33V4.33A.33.33 0 0 1 7.33 4h3a.33.33 0 0 1 .32.23l.36 1.09A1 1 0 0 0 12 6h4.67a.33.33 0 0 1 .33.33v5.34a.33.33 0 0 1-.33.33ZM12 20a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class UilFolderNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
