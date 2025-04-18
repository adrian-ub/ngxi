import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatPlusIcon],svg[topcoat-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.5 22.5v-3c0-1.48-.43-2-2-2h-13v-13c0-1.48-.49-2-2-2h-3c-1.55 0-2 .52-2 2v13h-14c-1.48 0-2 .49-2 2v3c0 1.55.52 2 2 2h14v14c0 1.51.48 2 2 2h3c1.48 0 2-.43 2-2v-14h13c1.51 0 2-.48 2-2"></svg:path>`,
})
export class TopcoatPlusIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
