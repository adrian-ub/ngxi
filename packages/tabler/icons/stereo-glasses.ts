import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerStereoGlassesIcon],svg[tabler-stereo-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3H6l-3 9m13-9h2l3 9M3 12v7a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l2-2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 0 .707.293H20a1 1 0 0 0 1-1v-7zm4 4h1m8 0h1"></svg:path>`,
})
export class TablerStereoGlassesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
