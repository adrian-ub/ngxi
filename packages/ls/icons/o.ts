import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsOIcon],svg[ls-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M285 113c152 0 275 121 275 271S437 654 285 654S0 534 0 384s133-271 285-271m-1 474c114 0 207-90 207-203s-93-204-207-204c-115 0-215 91-215 204s100 203 215 203"></svg:path>`,
})
export class LsOIcon {
  readonly viewBox = input("0 0 560 654")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
