import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFileDottedFillIcon],svg[ph-file-dotted-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 144v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0ZM80 24H56a16 16 0 0 0-16 16v24a8 8 0 0 0 16 0V40h24a8 8 0 0 0 0-16Zm-8 192H56v-32a8 8 0 0 0-16 0v32a16 16 0 0 0 16 16h16a8 8 0 0 0 0-16ZM213.6 82.3l-55.9-56h-.2l-.4-.4h-.2l-.4-.3c-.1-.1-.2-.1-.2-.2l-.5-.3h-.2l-.5-.3h-.1l-.7-.3H120a8 8 0 0 0 0 16h24V88a8 8 0 0 0 8 8h48v40a8 8 0 0 0 16 0V88a7.8 7.8 0 0 0-2.4-5.7ZM208 168a8 8 0 0 0-8 8v40h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16v-40a8 8 0 0 0-8-8Zm-56 48h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16Z"></svg:path>`,
})
export class PhFileDottedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
