import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRouterOneIcon],svg[icon-park-solid-router-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M10 24L4 38h40l-6-14z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 4v20z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 4v20"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M38 4v20z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 4v20"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M24 4v20z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 4v20M4 38v6h40v-6"></svg:path></svg:g>`,
})
export class IconParkSolidRouterOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
