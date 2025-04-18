import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSmartOptimizationIcon],svg[icon-park-outline-smart-optimization-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"><svg:path d="M24 45c3.22 0 8.728-4.2 8.728-21S27.22 3 24 3s-8.727 4.483-8.727 21S20.78 45 24 45"></svg:path><svg:path d="M5.105 35c1.61 2.812 8.143 5.421 23.259-3.379s16.142-15.809 14.531-18.62c-1.61-2.813-8.397-5.274-23.258 3.378C4.775 25.031 3.495 32.188 5.105 35"></svg:path><svg:path d="M5.105 13c-1.61 2.812-.585 9.821 14.532 18.621c15.116 8.8 21.648 6.191 23.258 3.38c1.61-2.813.33-9.97-14.531-18.622S6.715 10.188 5.105 13"></svg:path></svg:g>`,
})
export class IconParkOutlineSmartOptimizationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
