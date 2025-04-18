import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPresentlyIcon],svg[arcticons-presently-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.368 29.894c2.622-.43 9.557.868 6.83-10.412C30.471 8.203 21.088 11.935 18.354 5.5c-6.372 11.408-7.102 15.27-4.63 21.965c1.604 4.34 8.916 7.391 12.644 2.428Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.368 29.894c1.904 7.011 6.181 10.37 9.223 12.606"></svg:path>`,
})
export class ArcticonsPresentlyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
