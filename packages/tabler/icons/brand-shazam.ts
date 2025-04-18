import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandShazamIcon],svg[tabler-brand-shazam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m10 12l2-2a2.83 2.83 0 0 1 4 0a2.83 2.83 0 0 1 0 4l-3 3"></svg:path><svg:path d="m14 12l-2 2a2.828 2.828 0 1 1-4-4l3-3"></svg:path><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path></svg:g>`,
})
export class TablerBrandShazamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
