import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riVideoOffFillIcon],svg[ri-video-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 18.414l4.192 4.193l1.415-1.415l-19.8-19.799l-1.414 1.415L2.586 4H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1zM16 4H8.214l14.494 14.494A.5.5 0 0 0 23 18.04V5.96a.5.5 0 0 0-.787-.41L17 9.2V5a1 1 0 0 0-1-1"></svg:path>`,
})
export class RiVideoOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
