import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFullDressLonguetteIcon],svg[icon-park-outline-full-dress-longuette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m18 18l-4-8h20l-4 8v6l10.5 20H7l11-20zm2-14v6m8-6v6M18 21h12m-12-2v4m12-4v4"></svg:path>`,
})
export class IconParkOutlineFullDressLonguetteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
