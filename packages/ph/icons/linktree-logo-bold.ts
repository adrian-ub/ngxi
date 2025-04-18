import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLinktreeLogoBoldIcon],svg[ph-linktree-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 164v68a12 12 0 0 1-24 0v-68a12 12 0 0 1 24 0m68-72h-51l35.52-35.51a12 12 0 0 0-17-17L140 75V24a12 12 0 0 0-24 0v51L80.49 39.51a12 12 0 0 0-17 17L99 92H48a12 12 0 0 0 0 24h51l-35.49 35.51a12 12 0 0 0 17 17L128 121l47.51 47.52a12 12 0 0 0 17-17L157 116h51a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhLinktreeLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
