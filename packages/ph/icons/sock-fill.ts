import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSockFillIcon],svg[ph-sock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 16h-88a16 16 0 0 0-16 16v76.69l-38.75 38.74a58.92 58.92 0 0 0 83.32 83.32L201 162.34a23.85 23.85 0 0 0 7-17V32a16 16 0 0 0-16-16m0 16v24h-88V32Zm-2.34 119l-31.86 31.88a48 48 0 0 1 34.2-70.2v32.69a8 8 0 0 1-2.34 5.63"></svg:path>`,
})
export class PhSockFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
