import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBeelineIcon],svg[arcticons-beeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.543 14.26c7.304-4.532 13.843-5.328 15.33-2.26c.891 5.414-9.184 11.624-15.373 12.42m.085 10.256c13.472-1.486 30.193-14.789 22.421-21.997c17.634 9.618 2.846 25.299-11.911 29.704"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.554 42.5c6.349-5.531 7.251-8.535 7.697-12.378c-.095 5.223-1.752 9.47-4.066 12.261"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.695 18.571c3.248 5.138 3.556 8.928 3.567 11.827M15.723 10.227c6.158-.425 9.141.594 12.634 2.654"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsBeelineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
