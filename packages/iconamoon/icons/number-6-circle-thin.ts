import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber6CircleThinIcon],svg[iconamoon-number-6-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="currentColor" d="M13.418 7.274a.5.5 0 0 0-.836-.548zm-4.361 4.831a.5.5 0 1 0 .836.548zM14.5 14a2.5 2.5 0 0 1-2.5 2.5v1a3.5 3.5 0 0 0 3.5-3.5zM12 16.5A2.5 2.5 0 0 1 9.5 14h-1a3.5 3.5 0 0 0 3.5 3.5zM9.5 14a2.5 2.5 0 0 1 2.5-2.5v-1A3.5 3.5 0 0 0 8.5 14zm2.5-2.5a2.5 2.5 0 0 1 2.5 2.5h1a3.5 3.5 0 0 0-3.5-3.5zm.582-4.774l-3.525 5.38l.836.547l3.525-5.379z"></svg:path></svg:g>`,
})
export class IconamoonNumber6CircleThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
