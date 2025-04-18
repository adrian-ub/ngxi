import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMouserEiuMagazineIcon],svg[arcticons-mouser-eiu-magazine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.466 30.654V9.5L24 30.678L34.534 9.531v21.147M17.818 38.5h2.859m-2.859-5.719h2.859m-2.859 2.859h1.859m-1.859-2.859V38.5m5.724-5.719V38.5m2.923-5.72v3.79c0 1.072.858 1.93 1.859 1.93s1.858-.858 1.858-1.93v-3.79"></svg:path>`,
})
export class ArcticonsMouserEiuMagazineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
