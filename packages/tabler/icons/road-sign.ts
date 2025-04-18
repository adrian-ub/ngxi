import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRoadSignIcon],svg[tabler-road-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1-2.892 0l-7.955-7.955a2.045 2.045 0 0 1 0-2.892l7.955-7.955a2.045 2.045 0 0 1 2.892 0z"></svg:path><svg:path d="M9 14v-2c0-.59.414-1 1-1h5"></svg:path><svg:path d="m13 9l2 2l-2 2"></svg:path></svg:g>`,
})
export class TablerRoadSignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
