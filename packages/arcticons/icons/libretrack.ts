import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLibretrackIcon],svg[arcticons-libretrack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.588 43.5l16.966-10.25l.236-19.088L24.059 4.5L7.21 13.926v19.088l10.604 6.468l16.967-9.78l.118-12.135l-10.84-6.292L13.1 17.272v12.372l4.737 2.934l11.052-6.41v-5.42l-4.831-2.828l-4.949 2.651l-.082 4.784"></svg:path>`,
})
export class ArcticonsLibretrackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
