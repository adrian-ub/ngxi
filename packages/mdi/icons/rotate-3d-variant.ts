import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRotate3dVariantIcon],svg[mdi-rotate-3d-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5c4.97 0 9 2.69 9 6c0 1.68-1.04 3.2-2.71 4.29c1.07-.87 1.71-1.97 1.71-3.16C20 9.29 16.42 7 12 7v3L8 6l4-4zm0 14c-4.97 0-9-2.69-9-6c0-1.68 1.04-3.2 2.71-4.29C4.64 9.58 4 10.68 4 11.88C4 14.71 7.58 17 12 17v-3l4 4l-4 4z"></svg:path>`,
})
export class MdiRotate3dVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
