import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatabaseAddIcon],svg[hugeicons-database-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11 15c-4.418 0-8-1.343-8-3"></svg:path><svg:path d="M19 5v6.5M3 5v14c0 1.657 3.582 3 8 3q.252 0 .5-.006"></svg:path><svg:ellipse cx="11" cy="5" rx="8" ry="3"></svg:ellipse><svg:path d="M7 8v2m0 5v2m10-.333V18m0 0v1.333M17 18h1.333M17 18h-1.333M21 18a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path></svg:g>`,
})
export class HugeiconsDatabaseAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
