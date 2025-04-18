import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryLockIcon],svg[memory-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12h2v1h1v2h-1v1h-2v-1H9v-2h1zM8 2h6v1h1v1h1v4h1v1h1v10h-1v1H5v-1H4V9h1V8h1V4h1V3h1zm1 2v1H8v3h6V5h-1V4zm7 6H6v8h10z"></svg:path>`,
})
export class MemoryLockIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
