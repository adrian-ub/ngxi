import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFrustumIcon],svg[tabler-frustum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m18.402 5.508l2.538 10.158a1.99 1.99 0 0 1-1.064 2.278L12.84 21.31a1.95 1.95 0 0 1-1.682 0l-7.035-3.365a1.99 1.99 0 0 1-1.064-2.278L5.598 5.508a1.98 1.98 0 0 1 1.11-1.328l4.496-2.01a1.95 1.95 0 0 1 1.59 0l4.496 2.01c.554.246.963.736 1.112 1.328"></svg:path><svg:path d="m18 4.82l-5.198 2.324a1.96 1.96 0 0 1-1.602 0L6 4.819m6 2.501V21.5"></svg:path></svg:g>`,
})
export class TablerFrustumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
