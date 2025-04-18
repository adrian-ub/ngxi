import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsChevronsHorizontalIcon],svg[pixelarticons-chevrons-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9V7h2v2zm-2 2V9h2v2zm0 2H4v-2h2zm2 2v-2H6v2zm0 0h2v2H8zm8-6V7h-2v2zm2 2V9h-2v2zm0 2v-2h2v2zm-2 2v-2h2v2zm0 0v2h-2v-2z"></svg:path>`,
})
export class PixelarticonsChevronsHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
