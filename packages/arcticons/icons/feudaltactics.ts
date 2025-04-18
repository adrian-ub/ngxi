import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFeudaltacticsIcon],svg[arcticons-feudaltactics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 21.36l9.15 5.28M14.842 5.5l-9.15 5.287V21.36l9.15 5.278v10.574L24 42.5l9.15-5.287V26.64l9.159-5.278V10.787L33.15 5.5L24 10.787zm0 21.14L24 21.36m0 .001V10.787"></svg:path>`,
})
export class ArcticonsFeudaltacticsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
