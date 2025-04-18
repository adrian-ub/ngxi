import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDroneIcon],svg[streamline-drone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 1h4m5 0h4m-11 0v3m9-3v3m2 0H.5v1a2 2 0 0 0 2 2h1a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3h1a2 2 0 0 0 2-2zm-10 3h7"></svg:path><svg:path d="M4 8.65A4.48 4.48 0 0 0 2.5 12v1h1M10 8.65A4.48 4.48 0 0 1 11.5 12v1h-1"></svg:path></svg:g>`,
})
export class StreamlineDroneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
