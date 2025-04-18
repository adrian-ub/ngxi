import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeGardenIcon],svg[material-icon-theme-garden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-width=".752"><svg:path fill="#80cbc4" d="M14 14V2h-1.716v12z"></svg:path><svg:path fill="#80deea" d="M10.58 14V2H8.865v12z"></svg:path><svg:path fill="#26a69a" d="M10.58 8.98V2H8.865v6.98z"></svg:path><svg:path fill="#ff80ab" d="M10.608 10.034v-1.65H8.844v1.65z"></svg:path><svg:path fill="#1565c0" d="M7.145 14V6.377H5.452V14z"></svg:path><svg:path fill="#43a047" d="M5.451 14V2H3.716v12z"></svg:path><svg:path fill="#4db6ac" d="M3.716 14V2H2v12z"></svg:path><svg:path fill="#0288d1" d="M7.148 6.477V2H5.45v4.477z"></svg:path><svg:path fill="#ff80ab" d="M7.145 8.162V6.504H5.452v1.658z"></svg:path><svg:path fill="#4caf50" d="M12.296 14V2h-1.715v12z"></svg:path><svg:path fill="#00bfa5" d="M8.864 14V2H7.148v12z"></svg:path></svg:g>`,
})
export class MaterialIconThemeGardenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
