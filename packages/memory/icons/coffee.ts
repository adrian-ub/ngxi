import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCoffeeIcon],svg[memory-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 20v-2h16v2zM2 3h17v1h1v6h-1v1h-3v3h-1v1h-1v1H4v-1H3v-1H2zm14 2v4h2V5zM4 5v8h1v1h8v-1h1V5z"></svg:path>`,
})
export class MemoryCoffeeIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
