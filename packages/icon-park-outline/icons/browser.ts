import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBrowserIcon],svg[icon-park-outline-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42 18v22a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V18"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M6 8a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v10H6z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m6 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m6 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkOutlineBrowserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
