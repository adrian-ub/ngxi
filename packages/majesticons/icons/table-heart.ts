import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsTableHeartIcon],svg[majesticons-table-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20H9M3 8V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M3 8v6m0-6h6m12 0v3m0-3H9m-6 6v4a2 2 0 0 0 2 2h4m-6-6h6m0-6v6m0 0v6m0-6h1m5-6v3"></svg:path><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 16c0 1.2-2.667 3.833-4 5c-1.333-1.167-4-3.8-4-5c0-.667.4-2 2-2s2 1.333 2 2c0-.667.4-2 2-2s2 1.333 2 2"></svg:path><svg:path fill="currentColor" d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2H3z"></svg:path></svg:g>`,
})
export class MajesticonsTableHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
