import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWieIsDeMolIcon],svg[arcticons-wie-is-de-mol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.488 14.934v17h4m-21.591-.009V14.934l4 17l4-16.988v16.988"></svg:path><svg:rect width="5.3" height="17" x="29.029" y="14.934" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.65" ry="2.65"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.953 27.066h2.57m.925 6h-3.495v-12h3.495m-8.936 12v-12h1.04a2.26 2.26 0 0 1 2.26 2.26v7.479a2.26 2.26 0 0 1-2.26 2.26z"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsWieIsDeMolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
