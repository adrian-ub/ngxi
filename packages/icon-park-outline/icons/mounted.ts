import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMountedIcon],svg[icon-park-outline-mounted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 7h12m6 0h12"></svg:path><svg:path stroke-linejoin="round" d="M19 36h-3a3 3 0 0 1-3-3v-9a8 8 0 0 1 8-8h6a8 8 0 0 1 8 8v9a3 3 0 0 1-3 3h-3"></svg:path><svg:circle cx="24" cy="7" r="3"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29 35v1.4a1.6 1.6 0 0 1-1.6 1.6h-6.8a1.6 1.6 0 0 1-1.6-1.6V35a5 5 0 0 1 10 0"></svg:path><svg:path stroke-linejoin="round" d="M21 38v3a3 3 0 1 0 6 0v-3"></svg:path></svg:g>`,
})
export class IconParkOutlineMountedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
