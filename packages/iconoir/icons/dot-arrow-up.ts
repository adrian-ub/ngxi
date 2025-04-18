import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDotArrowUpIcon],svg[iconoir-dot-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0-7V2m0 0l3 3m-3-3L9 5"></svg:path>`,
})
export class IconoirDotArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
