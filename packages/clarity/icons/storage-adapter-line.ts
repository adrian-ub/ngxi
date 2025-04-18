import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityStorageAdapterLineIcon],svg[clarity-storage-adapter-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.06 30a1 1 0 0 1-1-1V8h-2a1 1 0 0 1 0-2h4v23a1 1 0 0 1-1 1" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M30.06 27h-25V9h25a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3m-23-2h23a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1h-23Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M22.06 20h6v2h-6z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M22.06 14h6v2h-6z" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M19.06 22h-8v-2h7v-6h2v7a1 1 0 0 1-1 1" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityStorageAdapterLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
