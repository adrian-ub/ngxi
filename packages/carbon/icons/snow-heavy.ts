import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSnowHeavyIcon],svg[carbon-snow-heavy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 26h2v2H4zm2 2h2v2H6zm2 2h2v2H8zm0-4h2v2H8zm-4 4h2v2H4zm4-12h2v2H8zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2H8zm10-4h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zm-4 4h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M24.8 9.136a8.994 8.994 0 0 0-17.6 0A6.496 6.496 0 0 0 6 21.5v-2.26a4.494 4.494 0 0 1 2.144-8.22l.816-.064l.099-.812a6.994 6.994 0 0 1 13.883 0l.099.812l.815.064A4.494 4.494 0 0 1 26 19.239v2.26a6.496 6.496 0 0 0-1.2-12.363"></svg:path>`,
})
export class CarbonSnowHeavyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
