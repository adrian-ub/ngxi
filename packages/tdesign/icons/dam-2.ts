import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDam2Icon],svg[tdesign-dam-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h18v18h1v2h-9v-2h1V10h-4v10h1v2H2v-2h1zm2 18h3V10H5zM5 8h14V4H5zm14 2h-3v10h3z"></svg:path>`,
})
export class TdesignDam2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
