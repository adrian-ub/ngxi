import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNewsreaderIcon],svg[arcticons-newsreader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.534 16.736h24.932M11.534 24h18.504m-18.504 7.265h24.932M10.043 9.017H7.231A2.73 2.73 0 0 0 4.5 11.748v24.504a2.73 2.73 0 0 0 2.731 2.731h2.812M37.957 9.017h2.812a2.73 2.73 0 0 1 2.731 2.731v24.504a2.73 2.73 0 0 1-2.731 2.731h-2.812"></svg:path>`,
})
export class ArcticonsNewsreaderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
