import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVianavigoIcon],svg[arcticons-vianavigo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.1 37.5c.859-1.407 7.93-11.123 10.3-11.123c3.604 0 9.111 8.446 10.985 11.123M13.272 26.257c1.922-1.682 6.626-3.673 11.02-4.291s9.646-3.021 10.608-4.428M24.566 10.5c1.923 0 2.781 1.51 2.781 3.261s-1.51 4.395-3.605 4.395s-2.849-1.717-2.849-3.124s1.099-4.532 3.673-4.532"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsVianavigoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
