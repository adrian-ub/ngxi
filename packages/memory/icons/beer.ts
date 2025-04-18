import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBeerIcon],svg[memory-beer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 15H7V8h2m3 7h-2V8h2m3 11H4V3h11v4h3v1h1v8h-1v1h-3m2-2V9h-2v6m-2 2V6H6v11Z"></svg:path>`,
})
export class MemoryBeerIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
