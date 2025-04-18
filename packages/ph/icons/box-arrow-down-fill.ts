import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBoxArrowDownFillIcon],svg[ph-box-arrow-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m223.16 68.42l-16-32A8 8 0 0 0 200 32H56a8 8 0 0 0-7.16 4.42l-16 32A8.1 8.1 0 0 0 32 72v136a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V72a8.1 8.1 0 0 0-.84-3.58m-57.5 89.24l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L120 164.69V104a8 8 0 0 1 16 0v60.69l18.34-18.35a8 8 0 0 1 11.32 11.32M52.94 64l8-16h134.12l8 16Z"></svg:path>`,
})
export class PhBoxArrowDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
