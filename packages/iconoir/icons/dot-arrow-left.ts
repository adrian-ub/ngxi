import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDotArrowLeftIcon],svg[iconoir-dot-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 14a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-5-2H2m0 0l3-3m-3 3l3 3"></svg:path>`,
})
export class IconoirDotArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
