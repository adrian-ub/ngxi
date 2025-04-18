import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCosmeticBrushIcon],svg[icon-park-cosmetic-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M16.0991 25.8287L38.7265 6.02967C38.7265 6.02967 40.8478 3.90835 42.9691 6.02967C45.0904 8.15099 42.9691 10.2723 42.9691 10.2723L23.1701 32.8997L16.0991 25.8287Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M22.4639 20.8789L28.1207 26.5358"></svg:path><svg:path stroke="#000" d="M5.49331 30.7782L16.0999 25.8284L23.171 32.8995L18.2212 43.5061C18.2212 43.5061 13.2715 44.2132 9.02884 39.9706C4.7862 35.7279 5.49331 30.7782 5.49331 30.7782Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6.90783 36.4349L11.8576 34.3136"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M12.5653 42.0921L13.9795 39.2637"></svg:path><svg:path stroke="#000" d="M18.9291 23.3536L21.7575 20.8787L24.586 18.4038"></svg:path><svg:path stroke="#000" d="M30.5957 24.4141L28.1208 27.2425L25.646 30.0709"></svg:path></svg:g>`,
})
export class IconParkCosmeticBrushIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
