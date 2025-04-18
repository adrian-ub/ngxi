import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCashIcon],svg[memory-cash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13h-2v-1H9v-2h1V9h2v1h1v2h-1m8 5H2V5h18m-4 10v-2h2V9h-2V7H6v2H4v4h2v2Z"></svg:path>`,
})
export class MemoryCashIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
