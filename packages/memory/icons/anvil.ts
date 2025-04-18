import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryAnvilIcon],svg[memory-anvil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11H4v-1H2V8H1V6h5m14 13H3v-2h1v-1h2v-1h1v-1h1v-3H7V5h13v3h-2v1h-1v1h-1v1h-1v3h1v1h1v1h2v1h1Z"></svg:path>`,
})
export class MemoryAnvilIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
