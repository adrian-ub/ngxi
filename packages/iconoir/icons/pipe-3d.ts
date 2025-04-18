import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPipe3dIcon],svg[iconoir-pipe-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20a6 6 0 1 1 0-12a6 6 0 0 1 0 12m.773-15.258a6 6 0 0 1 8.7 8.258M3 21l6.5-6.5M21 3l-1.5 1.5M6 9.5L10.5 5l.25-.25M14.5 18l4.719-4.719"></svg:path>`,
})
export class IconoirPipe3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
