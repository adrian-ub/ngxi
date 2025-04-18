import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPrisma3dIcon],svg[arcticons-prisma3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.253 29.999l17.023 9.828m-36.552.001L22.746 30M24 27.803V8.172m0 7.343L12.083 36.156h23.834z"></svg:path>`,
})
export class ArcticonsPrisma3dIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
