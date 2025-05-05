import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCactusIcon],svg[picon-cactus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7L0 6V2h2v3h1m2-2h1V1h2v3L5 5M3 8V0h2v8"></svg:path>`,
})
export class PiconCactusIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
