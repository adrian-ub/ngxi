import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFullscreenIcon],svg[picon-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0v1H1v2H0V0m5 1V0h3v3H7V1m0 4v2H5v1h3V5M1 5v2h2v1H0V5"></svg:path>`,
})
export class PiconFullscreenIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
