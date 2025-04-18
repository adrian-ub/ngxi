import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsMoldovaIcon],svg[game-icons-moldova-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60.55 44.17L181.3 16.43L341 94.41l3 89.99l36.8 10.5l5.2 69.7l33.8 9s34.5 81 31.5 81s-123.8-27-123.8-27l-64.4 168l-43.5-3.7l19.5-179.3l-55.5-110.2z"></svg:path>`,
})
export class GameIconsMoldovaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
