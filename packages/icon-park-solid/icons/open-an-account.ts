import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidOpenAnAccountIcon],svg[icon-park-solid-open-an-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 24V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h15m15.05-9v10M44 37.95H34"></svg:path><svg:circle cx="24" cy="18" r="5" fill="currentColor"></svg:circle><svg:path d="M33 31c0-4.418-4.03-8-9-8s-9 3.582-9 8"></svg:path></svg:g>`,
})
export class IconParkSolidOpenAnAccountIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
