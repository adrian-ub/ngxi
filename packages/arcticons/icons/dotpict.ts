import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDotpictIcon],svg[arcticons-dotpict-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.4 28.4V18h-2.6v7.8h1.95M17.35 18H15.4v10.4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.2 28.4v13h2.6v-2.6H7.6V31h5.2v-5.2h-2.6V15.4h2.6V7.6H18V5h13v2.6h5.2v7.8h2.6v10.4h-2.6V31h5.2v7.8h-5.2v2.6h2.6v-13Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.05 25.8H18V15.4h2.6v5.2h5.2m-5.2 8.45V31H18v5.2h-2.6v5.2h18.2v-5.2H31V31h-2.6v-1.95"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.2 41.4V44h-2.6v-2.6Zm2.6 0V44h2.6v-2.6m-7.8 0v-5.2h2.6v-7.15"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.8 29.05v7.15h2.6v5.2"></svg:path>`,
})
export class ArcticonsDotpictIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
