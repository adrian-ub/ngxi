import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsPixelfedIcon],svg[simple-icons-pixelfed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12s-5.373 12-12 12m-.953-9.38h2.202c2.074 0 3.755-1.637 3.755-3.656S15.323 7.31 13.249 7.31h-3.177c-1.197 0-2.167.944-2.167 2.109v8.208z"></svg:path>`,
})
export class SimpleIconsPixelfedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
