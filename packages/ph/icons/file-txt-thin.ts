import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFileTxtThinIcon],svg[ph-file-txt-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 112a4 4 0 0 0 8 0V88a4 4 0 0 0-1.17-2.83l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52Zm-48-70.35L198.34 84H156Zm-4.75 112.67L132.92 180l18.33 25.67a4 4 0 1 1-6.5 4.65L128 186.88l-16.75 23.44a4 4 0 1 1-6.5-4.65L123.08 180l-18.33-25.68a4 4 0 1 1 6.5-4.65L128 173.12l16.75-23.45a4 4 0 1 1 6.5 4.65M88 152a4 4 0 0 1-4 4H68v52a4 4 0 0 1-8 0v-52H44a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4m128 0a4 4 0 0 1-4 4h-16v52a4 4 0 0 1-8 0v-52h-16a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhFileTxtThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
