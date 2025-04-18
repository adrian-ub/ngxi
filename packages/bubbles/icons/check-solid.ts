import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesCheckSolidIcon],svg[bubbles-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.49 1.371a.674.674 0 0 0-.103-.918a.607.607 0 0 0-.877.108L3.974 8.268l-.007.01a.25.25 0 0 1-.091.077a.24.24 0 0 1-.229-.007a.25.25 0 0 1-.086-.083l-.008-.013L1.51 5.223a.61.61 0 0 0-.87-.158a.67.67 0 0 0-.152.91L2.527 9c.132.205.309.373.515.493a1.45 1.45 0 0 0 1.372.042c.214-.106.4-.264.544-.46z" clip-rule="evenodd"></svg:path>`,
})
export class BubblesCheckSolidIcon {
  readonly viewBox = input("0 0 12 10")
  readonly width = input("1.2em")
  readonly height = input("1em")
}
