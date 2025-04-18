import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPerspectiveViewIcon],svg[iconoir-perspective-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 21L4.143 3h15.714L23 21zm1-4.5h20M3 12h18M4 7.5h16M12 3v18M8 3.5l-1.5 17m9.5-17l1.5 17"></svg:path>`,
})
export class IconoirPerspectiveViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
