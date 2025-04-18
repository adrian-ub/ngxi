import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSpinningTopIcon],svg[icon-park-solid-spinning-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M24 44v-3"></svg:path><svg:path fill="currentColor" d="M44 20L24 41L4 20z"></svg:path><svg:path d="M44 12H4v8h40zm-20 0V4"></svg:path></svg:g>`,
})
export class IconParkSolidSpinningTopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
