import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenShapesFill12Icon],svg[garden-shapes-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm9.25-1.5a2.75 2.75 0 1 1 0 5.5a2.75 2.75 0 0 1 0-5.5M6.832.445l2 3A1 1 0 0 1 8 5H4a1 1 0 0 1-.832-1.555l2-3a1 1 0 0 1 1.664 0"></svg:path>`,
})
export class GardenShapesFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
