import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDvrIcon],svg[carbon-dvr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 15v-4a2 2 0 0 0-2-2h-6v14h2v-6h1.48l2.34 6H30l-2.33-6H28a2 2 0 0 0 2-2m-6-4h4v4h-4zm-6-2l-2 13l-2-13h-2l2.52 14h2.96L20 9zM6 23H2V9h4a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4m-2-2h2a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H4z"></svg:path>`,
})
export class CarbonDvrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
