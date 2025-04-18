import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandGraphqlIcon],svg[tabler-brand-graphql-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m4 8l8-5l8 5v8l-8 5l-8-5z"></svg:path><svg:path d="m12 4l7.5 12h-15z"></svg:path><svg:path d="M11 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0 18a1 1 0 1 0 2 0a1 1 0 0 0-2 0M3 8a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0 8a1 1 0 1 0 2 0a1 1 0 0 0-2 0m16 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m0-8a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path></svg:g>`,
})
export class TablerBrandGraphqlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
