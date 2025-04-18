import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHomeCityIcon],svg[mdi-home-city-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 21V10l7.5-5l7.5 5v11h-5v-7H5v7zM24 2v19h-7V8.93l-1-.66V6h-2v.93l-4-2.66V2zm-3 12h-2v2h2zm0-4h-2v2h2zm0-4h-2v2h2z"></svg:path>`,
})
export class MdiHomeCityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
