import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDotArrowRightIcon],svg[iconoir-dot-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 14a2 2 0 1 1 0-4a2 2 0 0 1 0 4m5-2h13m0 0l-3-3m3 3l-3 3"></svg:path>`,
})
export class IconoirDotArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
