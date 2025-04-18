import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAsusRouterIcon],svg[arcticons-asus-router-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="31.465" height="6.555" x="6.916" y="32.847" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.866"></svg:rect><svg:circle cx="10.456" cy="36.124" r="1.705" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.559 13.341h2.622v19.506h-2.622zm5.261-.839a3.933 3.933 0 0 1-.67 6.493m-6.611-.001a3.933 3.933 0 0 1-.669-6.493"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.75 10.719a6.18 6.18 0 0 1-.646 10.033m-10.492-.076a6.18 6.18 0 0 1-.636-9.867"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.874 8.598a8.86 8.86 0 0 1-.689 14.165m-14.519-.103a8.86 8.86 0 0 1-.679-13.941m11.768 27.408h2.7m-7.945 0h2.7m-7.945 0h2.7"></svg:path>`,
})
export class ArcticonsAsusRouterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
