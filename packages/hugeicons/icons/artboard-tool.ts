import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArtboardToolIcon],svg[hugeicons-artboard-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 7h6c3.3 0 4.95 0 5.975 1.025S22 10.7 22 14v1c0 3.3 0 4.95-1.025 5.975S18.3 22 15 22h-1c-3.3 0-4.95 0-5.975-1.025S7 18.3 7 15V9M2 7h3m2-2V2" color="currentColor"></svg:path>`,
})
export class HugeiconsArtboardToolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
