import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPanoramaVerticalOffIcon],svg[tabler-panorama-vertical-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3h10.53c.693 0 1.18.691.935 1.338q-1.647 4.347-1.425 8.692m.828 4.847q.258.888.595 1.778A1 1 0 0 1 17.529 21h-11c-.692 0-1.208-.692-.962-1.34q2.545-6.73.619-13.46M3 3l18 18"></svg:path>`,
})
export class TablerPanoramaVerticalOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
