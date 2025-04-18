import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSugarizerIcon],svg[arcticons-sugarizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.642 31.265l6.631-6.631a3.282 3.282 0 0 0-4.642-4.642L24 26.623l-6.631-6.631a3.282 3.282 0 1 0-4.642 4.642l6.631 6.631l-6.631 6.632a3.282 3.282 0 1 0 4.642 4.642L24 35.907l6.631 6.632a3.282 3.282 0 0 0 4.642-4.642Z"></svg:path><svg:circle cx="23.999" cy="10.774" r="6.274" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsSugarizerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
