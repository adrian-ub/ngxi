import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFilterListOffIcon],svg[material-symbols-light-filter-list-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.833 21.26L2.74 4.167l.713-.713l17.092 17.092zm-4.508-8.76l-1-1h2.848v1zm-4.5-4.5l-1-1H20v1zm-.267 9v-1h2.865v1zm-3.75-4.5v-1h4.265v1zM4 8V7h2.573v1z"></svg:path>`,
})
export class MaterialSymbolsLightFilterListOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
