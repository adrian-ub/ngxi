import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSaisonIcon],svg[arcticons-saison-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.692 34.743C40.966 32.344 38.662 20.16 24 4.5C9.338 20.16 7.034 32.344 22.307 34.743L24 9.329zm0 0V43.5h-3.385v-8.757z"></svg:path>`,
})
export class ArcticonsSaisonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
