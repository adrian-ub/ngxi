import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelFlagAltIcon],svg[raphael-flag-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.562 10.75C21.74 8.572 25.5 7 25.5 7c-8 0-8-4-16-4v10c8 0 8 4 16 4c0 0-3.75-3-5.938-6.25M6.5 29h2V3h-2z"></svg:path>`,
})
export class RaphaelFlagAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
