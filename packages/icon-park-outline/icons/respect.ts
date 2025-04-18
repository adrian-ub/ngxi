import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRespectIcon],svg[icon-park-outline-respect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 42H31l-2.956-13.793a2 2 0 0 1-.044-.419V15l-7.43-5.964a1.962 1.962 0 0 1 2.19-3.24L32 11l3.947 14.803q.053.197.144.38zm-8-16l-8 2"></svg:path><svg:path d="m19.379 25.52l.064.054a2 2 0 0 0 3-.508L24 22.463V17.77L20.32 15l-6.36.846l-4.145 8.096q-.075.145-.125.3L4 42h11.96V29L17 24.087L17.5 22H19l-.304 1.617a2 2 0 0 0 .683 1.904M10 25l6 3"></svg:path></svg:g>`,
})
export class IconParkOutlineRespectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
