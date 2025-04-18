import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVirtualSoftKeysIcon],svg[arcticons-virtual-soft-keys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.53 19.197v9.607L4.5 24zM28.145 24c0 2.475-1.934 4.481-4.32 4.481h0c-2.385 0-4.32-2.006-4.32-4.481h0c0-2.475 1.935-4.481 4.32-4.481h0c2.386 0 4.32 2.006 4.32 4.481m7.553-4.047H43.5v8.093h-7.802z"></svg:path>`,
})
export class ArcticonsVirtualSoftKeysIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
