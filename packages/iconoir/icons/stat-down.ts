import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirStatDownIcon],svg[iconoir-stat-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4 10l8 8l3-3l5 5M16 4v8m0 0l3-3m-3 3l-3-3"></svg:path>`,
})
export class IconoirStatDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
