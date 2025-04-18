import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreePaintFormatIcon],svg[icomoon-free-paint-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9V3h-3V2c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V4h2v4H6v2h-.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5H7V9zm-4-6H1V2h11z"></svg:path>`,
})
export class IcomoonFreePaintFormatIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
