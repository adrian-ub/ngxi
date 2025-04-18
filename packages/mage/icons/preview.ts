import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[magePreviewIcon],svg[mage-preview-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10.584 21.25h-1.25a6 6 0 0 1-6-6v-6.5a6 6 0 0 1 6-6h6.5a6 6 0 0 1 6 6V10"></svg:path><svg:path stroke-linejoin="round" d="m16.55 16.864l-.51 2.959a1.164 1.164 0 0 1-2.212.093l-2.789-7.882a1.164 1.164 0 0 1 1.493-1.493l8.036 2.788a1.164 1.164 0 0 1-.115 2.234l-3.113.51a1.17 1.17 0 0 0-.79.791"></svg:path></svg:g>`,
})
export class MagePreviewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
