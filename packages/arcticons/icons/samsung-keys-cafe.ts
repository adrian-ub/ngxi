import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSamsungKeysCafeIcon],svg[arcticons-samsung-keys-cafe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 9.5v29a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4h29a4 4 0 0 1 4 4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.875 12.588A2.088 2.088 0 0 0 34 11.512a2.088 2.088 0 0 0-3.735 1.822C30.955 15.322 34 17.5 34 17.5s3.045-2.18 3.735-4.165c.09-.232.14-.483.14-.747"></svg:path><svg:circle cx="24" cy="24" r="3.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="14" r="3.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="14" cy="24" r="3.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="14" cy="14" r="3.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34" cy="24" r="3.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:rect width="27" height="7" x="10.5" y="30.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.5" ry="3.5"></svg:rect>`,
})
export class ArcticonsSamsungKeysCafeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
