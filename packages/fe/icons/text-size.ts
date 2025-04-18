import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feTextSizeIcon],svg[fe-text-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.5 16.494l2.408-7.224h2.182L21 17.995h-1.968l-.569-1.927h-2.966l-.643 1.927h-.853l.002.005h-2.707l-.782-2.65h-4.08L5.55 18H3L7 6h3zM7 13h3L8.496 9zm8.908 1.36h2.182l-1.094-2.909z"></svg:path>`,
})
export class FeTextSizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
