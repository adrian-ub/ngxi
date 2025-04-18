import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUserRectangleFillIcon],svg[ph-user-rectangle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44m60-64v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 144V56H40v144h14.68a80 80 0 0 1 29.41-34.84a4 4 0 0 1 4.83.31a59.82 59.82 0 0 0 78.16 0a4 4 0 0 1 4.83-.31A80 80 0 0 1 201.32 200z"></svg:path>`,
})
export class PhUserRectangleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
