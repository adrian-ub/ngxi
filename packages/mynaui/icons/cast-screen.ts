import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCastScreenIcon],svg[mynaui-cast-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 8.028c0-.956 0-1.434.108-1.826a3 3 0 0 1 2.094-2.094C5.594 4 6.072 4 7.028 4H16.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 6.28 21 7.12 21 8.8v6.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 20 17.88 20 16.2 20h-2.053"></svg:path><svg:path d="M11 20a8 8 0 0 0-8-8m0 8.004l.354-.354M7 20a4 4 0 0 0-4-4"></svg:path></svg:g>`,
})
export class MynauiCastScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
