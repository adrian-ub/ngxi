import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteMusicAltSolidIcon],svg[flowbite-music-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.5 13a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7"></svg:path><svg:path fill-rule="evenodd" d="M11 5a1 1 0 0 1 1-1c1.544 0 3.324.754 4.515 2.168c1.235 1.467 1.789 3.584.934 6.148a1 1 0 0 1-1.898-.632c.646-1.936.2-3.319-.566-4.227A4.24 4.24 0 0 0 13 6.158V16.5a1 1 0 1 1-2 0z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FlowbiteMusicAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
