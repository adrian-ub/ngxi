import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsRootIcon],svg[lets-icons-root-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18.5 15.5l-4-4m0 4l4-4M20 7h-6.902a.15.15 0 0 0-.138.09l-3.83 8.62a.15.15 0 0 1-.272.006L7.04 12.083A.15.15 0 0 0 6.907 12H6"></svg:path>`,
})
export class LetsIconsRootIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
