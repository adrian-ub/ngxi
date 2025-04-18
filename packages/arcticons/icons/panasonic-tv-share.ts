import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPanasonicTvShareIcon],svg[arcticons-panasonic-tv-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.97 18.376l-24.09-3.47V36.79h33.07V23.34"></svg:path><svg:circle cx="35.913" cy="16.363" r="7.218" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="25.785" cy="28.245" r="3.781" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.973 29.032c1.948 1.935 2.638 4.918 1.795 7.76m-9.899-8.998c1.638-.78 3.443-.957 5.106-.5"></svg:path><svg:circle cx="12.38" cy="26.593" r="2.521" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.244 36.79v2.066m-5.614 0h10.134"></svg:path>`,
})
export class ArcticonsPanasonicTvShareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
