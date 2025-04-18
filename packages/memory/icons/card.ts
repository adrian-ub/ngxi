import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCardIcon],svg[memory-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h18v1h1v14h-1v1H2v-1H1V4h1zm1 2v12h16V5z"></svg:path>`,
})
export class MemoryCardIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
