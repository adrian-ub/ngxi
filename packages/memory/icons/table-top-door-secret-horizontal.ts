import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopDoorSecretHorizontalIcon],svg[memory-table-top-door-secret-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14h-2v-4h-2v3h-1v1H7v-1H6V8h2v4h2V9h1V8h4v1h1m2 8H6v-1H4v-1H3v-3H0v-2h3V6h1V5h12v1h2v2h1v2h3v2h-3v4h-1m-1-1V8h-1V7H5v7h1v1Z"></svg:path>`,
})
export class MemoryTableTopDoorSecretHorizontalIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
