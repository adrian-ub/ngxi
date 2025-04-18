import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsChurchLineIcon],svg[majesticons-church-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 9l-8 6h2v5m6-11l8 6h-2v5M12 9V4m6 16h3m-3 0h-4M3 20h3m0 0h4m0-14h4m-4 14v-3a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v3m-4 0h4"></svg:path>`,
})
export class MajesticonsChurchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
