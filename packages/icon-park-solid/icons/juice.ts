import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidJuiceIcon],svg[icon-park-solid-juice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15 24h18l-1.8 20H16.8z"></svg:path><svg:rect width="26" height="6" x="11" y="18" rx="3"></svg:rect><svg:path fill="currentColor" d="M24 8c-5.523 0-10 4.477-10 10h20c0-5.523-4.477-10-10-10Z"></svg:path><svg:path stroke-linecap="round" d="m28 4l-2 4"></svg:path></svg:g>`,
})
export class IconParkSolidJuiceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
