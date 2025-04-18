import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLinkPlusIcon],svg[tabler-link-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 15l6-6m-4-3l.463-.536a5 5 0 0 1 7.072 0a4.993 4.993 0 0 1-.001 7.072m-5.931 5.998a5.07 5.07 0 0 1-7.127 0a4.97 4.97 0 0 1 0-7.071L6 11m10 8h6m-3-3v6"></svg:path>`,
})
export class TablerLinkPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
