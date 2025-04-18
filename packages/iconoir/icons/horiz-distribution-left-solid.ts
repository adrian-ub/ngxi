import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirHorizDistributionLeftSolidIcon],svg[iconoir-horiz-distribution-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M19 7v10h-5.4a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 17V7m0 10h-5.4a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6H19m0 10v3m0-13V4"></svg:path><svg:path fill="currentColor" d="M9 7v10H5.6a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17V7m0 10H5.6a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6H9m0 10v3M9 7V4"></svg:path></svg:g>`,
})
export class IconoirHorizDistributionLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
