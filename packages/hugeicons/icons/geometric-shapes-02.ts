import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGeometricShapes02Icon],svg[hugeicons-geometric-shapes-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="6.5" cy="6.5" r="4.5"></svg:circle><svg:path d="M11 6h7.276c2.258 0 3.387 0 3.669.678c.28.679-.518 1.477-2.115 3.074L9.752 19.83c-1.597 1.597-2.395 2.396-3.074 2.115C6 21.663 6 20.535 6 18.276V11"></svg:path><svg:path d="M17.5 12h.5c1.886 0 2.828 0 3.414.586S22 14.114 22 16v1c0 1.886 0 2.828-.586 3.414S19.886 21 18 21h-1c-1.886 0-2.828 0-3.414-.586S13 18.886 13 17v-.5"></svg:path></svg:g>`,
})
export class HugeiconsGeometricShapes02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
