import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextHSixFillIcon],svg[ph-text-h-six-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 152a16 16 0 1 1-16-16a16 16 0 0 1 16 16m32-104v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-96 32a8 8 0 0 0-16 0v32H72V80a8 8 0 0 0-16 0v80a8 8 0 0 0 16 0v-32h40v32a8 8 0 0 0 16 0Zm80 72a32 32 0 0 0-32-32l11.55-20a8 8 0 0 0-13.86-8l-25.4 44l-.14.27A32 32 0 1 0 208 152"></svg:path>`,
})
export class PhTextHSixFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
