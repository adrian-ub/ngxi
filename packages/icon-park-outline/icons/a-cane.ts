import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineACaneIcon],svg[icon-park-outline-a-cane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19.558 44.768L33.642 18.28c1.173-2.207 3.811-9.299-3.252-13.055C23.326 1.47 19.157 7.181 17.749 9.83"></svg:path>`,
})
export class IconParkOutlineACaneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
