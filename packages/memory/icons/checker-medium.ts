import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCheckerMediumIcon],svg[memory-checker-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22h-4v-3h-3v3h-4v-3H7v3H4v-3H0v-4h4v-4H0V8h4V4H0V0h4v4h3V0h4v4h4V0h3v4h4v4h-4v3h4v4h-4v4h4M11 8V4H7v4m11 0V4h-3v4m-8 3V8H4v3m11 0V8h-4v3m0 4v-4H7v4m11 0v-4h-3v4m-8 4v-4H4v4m11 0v-4h-4v4Z"></svg:path>`,
})
export class MemoryCheckerMediumIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
