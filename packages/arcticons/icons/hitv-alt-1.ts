import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHitvAlt1Icon],svg[arcticons-hitv-alt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m37.5 19.333l-3.276 9.89l-3.277-9.89m-8.662 0h6.553m-3.277 9.891v-9.891m-5.815 3.338v6.553M10.5 19.333v9.891m6.553-9.891v9.891M10.5 24.259h6.553"></svg:path><svg:circle cx="19.746" cy="19.642" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsHitvAlt1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
