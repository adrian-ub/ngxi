import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTidalLogoBoldIcon],svg[ph-tidal-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m252.49 87.51l-38-38a12 12 0 0 0-17 0L168 79l-31.51-31.49a12 12 0 0 0-17 0L88 79L58.49 49.51a12 12 0 0 0-17 0l-38 38a12 12 0 0 0 0 17l38 38a12 12 0 0 0 17 0L88 113l23 23l-31.49 31.51a12 12 0 0 0 0 17l40 40a12 12 0 0 0 17 0l40-40a12 12 0 0 0 0-17L145 136l23-23l29.51 29.52a12 12 0 0 0 17 0l38-38a12 12 0 0 0-.02-17.01M50 117L29 96l21-21l21 21Zm78 82l-23-23l23-23l23 23Zm0-80l-23-23l23-23l23 23Zm78-2l-21-21l21-21l21 21Z"></svg:path>`,
})
export class PhTidalLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
