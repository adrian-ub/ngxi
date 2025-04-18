import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDashboardTwoIcon],svg[icon-park-dashboard-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44C35.0457 44 44 35.0457 44 24C44 18.4836 41.7666 13.4887 38.1547 9.87045C34.5344 6.24377 29.5292 4 24 4C18.4708 4 13.4656 6.24377 9.84529 9.87045C6.23339 13.4887 4 18.4835 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path d="M4 24H8"></svg:path><svg:path d="M9.84521 9.87036L12.9747 12.9999"></svg:path><svg:path d="M24 4V8"></svg:path><svg:path d="M44 24H40"></svg:path><svg:path d="M38.1549 9.87036L35.0254 12.9999"></svg:path><svg:path d="M24 20V32"></svg:path><svg:path d="M39.8523 36.1961C36.1954 40.9422 30.4548 44 24 44C17.5452 44 11.8046 40.9422 8.14771 36.1961C12.8209 33.5259 18.2323 32 24 32C29.7677 32 35.179 33.5259 39.8523 36.1961Z"></svg:path></svg:g>`,
})
export class IconParkDashboardTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
