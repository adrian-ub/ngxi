import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandAmongUsIcon],svg[tabler-brand-among-us-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10.646 12.774c-1.939.396-4.467.317-6.234-.601c-2.454-1.263-1.537-4.66 1.423-4.982c2.254-.224 3.814-.354 5.65.214c.835.256 1.93.569 1.355 3.281c-.191 1.067-1.07 1.904-2.194 2.088"></svg:path><svg:path d="M5.84 7.132q.125-.848.392-1.661c.456-.936 1.095-2.068 3.985-2.456a23 23 0 0 1 2.867.08c1.776.14 2.643 1.234 3.287 3.368c.339 1.157.46 2.342.629 3.537v11l-12.704-.019c-.552-2.386-.262-5.894.204-8.481M17 10c.991.163 2.105.383 3.069.67c.255.13.52.275.534.505c.264 3.434.57 7.448.278 9.825H17"></svg:path></svg:g>`,
})
export class TablerBrandAmongUsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
