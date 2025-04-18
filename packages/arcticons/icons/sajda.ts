import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSajdaIcon],svg[arcticons-sajda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.616 9.866a17 17 0 0 1 2.962 9.616c0 9.442-7.654 17.096-17.096 17.096a17 17 0 0 1-9.616-2.962c3.077 4.514 8.258 7.48 14.134 7.48c9.442 0 17.096-7.654 17.096-17.096c0-5.876-2.966-11.056-7.48-14.134"></svg:path>`,
})
export class ArcticonsSajdaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
