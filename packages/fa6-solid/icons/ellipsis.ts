import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidEllipsisIcon],svg[fa6-solid-ellipsis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 256a56 56 0 1 1 112 0a56 56 0 1 1-112 0m160 0a56 56 0 1 1 112 0a56 56 0 1 1-112 0m216-56a56 56 0 1 1 0 112a56 56 0 1 1 0-112"></svg:path>`,
})
export class Fa6SolidEllipsisIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
