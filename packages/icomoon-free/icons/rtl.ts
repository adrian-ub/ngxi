import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeRtlIcon],svg[icomoon-free-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0a4 4 0 0 0 0 8v8h2V2h2v14h2V2h2V0zm12 3l-4 4l4 4z"></svg:path>`,
})
export class IcomoonFreeRtlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
