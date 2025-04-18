import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCookieIcon],svg[iconoir-cookie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M7.5 11a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m5.5 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2M11 7.01l.01-.011M8 16.01l.01-.011M16 9.01l.01-.011M17 14.01l.01-.011M13 12.01l.01-.011"></svg:path></svg:g>`,
})
export class IconoirCookieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
