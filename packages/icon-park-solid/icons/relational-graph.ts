import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRelationalGraphIcon],svg[icon-park-solid-relational-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 35h40"></svg:path><svg:path d="M24 32c0-4.418-3.806-8-8.5-8S7 27.582 7 32"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M41 32c0-11.046-7.611-20-17-20S7 20.954 7 32"></svg:path><svg:circle cx="41" cy="35" r="3" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="35" r="3" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="7" cy="35" r="3" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle></svg:g>`,
})
export class IconParkSolidRelationalGraphIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
