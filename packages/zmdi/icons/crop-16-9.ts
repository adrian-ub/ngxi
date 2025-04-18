import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCrop169Icon],svg[zmdi-crop-16-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 64q18 0 30.5 12.5T384 107v170q0 18-12.5 30.5T341 320H43q-18 0-30.5-12.5T0 277V107q0-18 12.5-30.5T43 64zm0 213V107H43v170z"></svg:path>`,
})
export class ZmdiCrop169Icon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
