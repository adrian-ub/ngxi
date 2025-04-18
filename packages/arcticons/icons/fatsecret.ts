import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFatsecretIcon],svg[arcticons-fatsecret-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.537 20.037a5.537 5.537 0 0 0-11.074 0a5.53 5.53 0 0 0 2.747 4.777L18.786 33.5h10.427l-2.424-8.686a5.53 5.53 0 0 0 2.748-4.777"></svg:path>`,
})
export class ArcticonsFatsecretIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
