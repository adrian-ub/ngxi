import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirScissorAltIcon],svg[iconoir-scissor-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.236 8a3 3 0 1 0-4.472-4a3 3 0 0 0 4.472 4m0 0L20 16m-9.764 0a3 3 0 1 1-4.472 4a3 3 0 0 1 4.472-4m0 0L20 8"></svg:path>`,
})
export class IconoirScissorAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
