import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTranslation2BrokenIcon],svg[solar-translation-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 6a6 6 0 0 0-4.243 10.243m8.486 0A5.98 5.98 0 0 0 18 12a5.97 5.97 0 0 0-1-3.318"></svg:path><svg:path stroke-linecap="round" d="M12 2c5.523 0 10 4.477 10 10a9.97 9.97 0 0 1-2.929 7.071m-14.142 0A9.97 9.97 0 0 1 2 12a10 10 0 0 1 5-8.662"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path d="M9.887 17.344c.96-.876 1.44-1.314 2.032-1.342q.081-.004.162 0c.593.028 1.072.466 2.032 1.342c2.087 1.906 3.13 2.858 2.839 3.68a1.3 1.3 0 0 1-.094.206c-.43.77-1.906.77-4.858.77s-4.428 0-4.858-.77a1.4 1.4 0 0 1-.094-.206c-.292-.822.752-1.774 2.84-3.68Z"></svg:path></svg:g>`,
})
export class SolarTranslation2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
