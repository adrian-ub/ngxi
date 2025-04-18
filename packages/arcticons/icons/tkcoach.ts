import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTkcoachIcon],svg[arcticons-tkcoach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.076 33.545h4.341l-4.403 4.475l4.403 4.48h-4.341l-4.403-4.48z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.327 30.494h9.178v3.063h-2.832v4.463H9.159v-4.463H6.327zm8.526-21.798s1.746 5.8 10.755 9.76c0 0 7.07 4.68.1 17.127M41.673 5.502s.14 3.38-6.337 10.351c0 0 9.576 6.126-2.042 19.998M30.646 7.959c1.649 2.31 1.523 5.227-.28 6.515c-1.805 1.288-4.604.459-6.254-1.852s-1.523-5.227.28-6.515c1.805-1.288 4.604-.459 6.254 1.852"></svg:path>`,
})
export class ArcticonsTkcoachIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
