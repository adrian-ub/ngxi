import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFlag1Icon],svg[tdesign-flag-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h8.414l2 2h8.014l-2.364 6.5l2.364 6.5h-8.842l-2-2H5v7.5H3zm2 11h6.414l2 2h5.158L17.3 11.5h-4.714l-2-2H5zm0-5.5h6.414l2 2H17.3L18.572 6h-5.986l-2-2H5z"></svg:path>`,
})
export class TdesignFlag1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
