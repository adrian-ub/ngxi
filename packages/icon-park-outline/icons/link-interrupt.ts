import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLinkInterruptIcon],svg[icon-park-outline-link-interrupt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M27 14h15a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M11 14H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h15M14 6l20 34m-2-17h4m-24 0h4"></svg:path>`,
})
export class IconParkOutlineLinkInterruptIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
