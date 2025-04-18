import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSubwayIcon],svg[arcticons-subway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.9 4.5l8.3 6.6l-8.3 6.6v-3.3h-7.2c-6.7-.1-9.1 7.5-2.1 10.6l3.6 1.7c.6.2.9.9-.2.8H13.8C5.3 22.6 7.5 7.9 22.3 7.8h8.6Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.1 43.5l-8.3-6.6l8.3-6.6v3.3h7.2c6.7.1 9.1-7.5 2.1-10.6l-3.6-1.7c-.6-.2-.9-.9.2-.8h11.1c8.5 4.8 6.3 19.4-8.5 19.6H17Z"></svg:path>`,
})
export class ArcticonsSubwayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
