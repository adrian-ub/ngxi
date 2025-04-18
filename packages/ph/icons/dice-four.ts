import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDiceFourIcon],svg[ph-dice-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32m16 160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16Zm-96-92a12 12 0 1 1-12-12a12 12 0 0 1 12 12m56 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-56 56a12 12 0 1 1-12-12a12 12 0 0 1 12 12m56 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhDiceFourIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
