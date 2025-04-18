import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiPlus1Icon],svg[zmdi-plus-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 85v86h85v42h-85v86H85v-86H0v-42h85V85zm213 235h-42V93l-64 22V79l100-36h6z"></svg:path>`,
})
export class ZmdiPlus1Icon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
