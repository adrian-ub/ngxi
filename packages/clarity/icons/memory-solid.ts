import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityMemorySolidIcon],svg[clarity-memory-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 13V9a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4h2v4H2v10a2 2 0 0 0 2 2h12.61v-3.45H19V29h13a2 2 0 0 0 2-2V17h-2v-4Zm-22 7H8v-8h4Zm8 0h-4v-8h4Zm8 0h-4v-8h4Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityMemorySolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
