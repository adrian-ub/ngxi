import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsPlanetRing2Icon],svg[majesticons-planet-ring-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 7.96c2.59-.125 4.379.274 4.625 1.193c.429 1.6-3.98 4.172-9.849 5.745c-5.868 1.572-10.972 1.55-11.401-.051c-.254-.948 1.188-2.236 3.625-3.455"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4 12a8 8 0 1 1 15.985.491c-1.653.879-3.904 1.754-6.467 2.44c-2.874.77-5.526 1.14-7.478 1.131a12 12 0 0 1-.956-.039A7.96 7.96 0 0 1 4 12m2.766 6.05a8.003 8.003 0 0 0 12.658-3.065c-1.561.697-3.4 1.346-5.389 1.879c-2.668.715-5.208 1.115-7.269 1.186" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsPlanetRing2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
