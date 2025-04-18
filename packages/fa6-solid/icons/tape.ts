import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTapeIcon],svg[fa6-solid-tape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M380.8 416c41.5-40.7 67.2-97.3 67.2-160c0-123.7-100.3-224-224-224S0 132.3 0 256s100.3 224 224 224h320c17.7 0 32-14.3 32-32s-14.3-32-32-32zM224 160a96 96 0 1 1 0 192a96 96 0 1 1 0-192m64 96a64 64 0 1 0-128 0a64 64 0 1 0 128 0"></svg:path>`,
})
export class Fa6SolidTapeIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
