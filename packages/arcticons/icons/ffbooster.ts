import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFfboosterIcon],svg[arcticons-ffbooster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.75 11.667l-9.25 9.25l15.417 15.417m-9.25-9.251l6.666-6.666"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.333 14.75l-9.25-9.25l-15.417 15.417m9.251-9.25l6.666 6.666"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.25 36.333l9.25-9.25l-15.417-15.417m9.25 9.251l-6.666 6.666"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.667 33.25l9.25 9.25l15.417-15.417m-9.251 9.25l-6.666-6.666"></svg:path>`,
})
export class ArcticonsFfboosterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
