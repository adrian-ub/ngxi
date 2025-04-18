import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBaseballCapIcon],svg[icon-park-outline-baseball-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 30c0-8.837 7.163-16 16-16v0c8.837 0 16 7.163 16 16v6H12z"></svg:path><svg:path d="M22 36c-1-3.5-1-22 6-22s6.5 18 6 22"></svg:path><svg:rect width="30" height="6" x="4" y="36" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:circle cx="28" cy="10" r="4"></svg:circle></svg:g>`,
})
export class IconParkOutlineBaseballCapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
