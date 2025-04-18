import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFoodieIcon],svg[arcticons-foodie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="23.069" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37 29.46c-2.36 4.8-7.29 8.11-13 8.11c-7.41 0-13.52-5.56-14.39-12.74c-.07-.57-.11-1.16-.11-1.76s.05-1.18.12-1.76M11 16.68c2.36-4.8 7.29-8.11 13-8.11c7.41 0 13.52 5.56 14.39 12.74c.07.57.11 1.16.11 1.76m-25.48-1.76h-3.4m3.4 3.52H9.61"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 23.07c0 .97-.79 1.76-1.76 1.76s-1.76-.79-1.76-1.76s.79-1.76 1.76-1.76h1.65"></svg:path>`,
})
export class ArcticonsFoodieIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
