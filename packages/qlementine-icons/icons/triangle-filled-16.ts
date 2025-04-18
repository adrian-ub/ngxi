import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsTriangleFilled16Icon],svg[qlementine-icons-triangle-filled-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.325 11.6l5.02-9.99c1.1-2.19 4.21-2.19 5.31 0l5.02 9.99c1 2-.436 4.36-2.66 4.36h-10c-2.22 0-3.66-2.36-2.66-4.36z"></svg:path>`,
})
export class QlementineIconsTriangleFilled16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
