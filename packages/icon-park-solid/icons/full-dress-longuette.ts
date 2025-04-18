import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFullDressLonguetteIcon],svg[icon-park-solid-full-dress-longuette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSFullDressLonguette0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="m18 18l-4-8h20l-4 8v6l10.5 20H7l11-20z"></svg:path><svg:path stroke="#fff" d="M20 4v6m8-6v6"></svg:path><svg:path stroke="#000" d="M18 21h12"></svg:path><svg:path stroke="#fff" d="M18 19v4m12-4v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSFullDressLonguette0)"></svg:path>`,
})
export class IconParkSolidFullDressLonguetteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
