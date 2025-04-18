import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBlenderIcon],svg[tabler-blender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 10H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10.802a1 1 0 0 1 .984 1.179L16 15M8 4l2 11m1 0h4a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a3 3 0 0 1 3-3"></svg:path><svg:path d="M12 4V3h2v1m-1 14v.01"></svg:path></svg:g>`,
})
export class TablerBlenderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
