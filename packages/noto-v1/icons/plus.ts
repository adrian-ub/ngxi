import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1PlusIcon],svg[noto-v1-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ed6c30" d="M127.35 59.61c0-4.36-3.56-7.92-7.92-7.92h-35.2c-4.36 0-7.92-3.56-7.92-7.92V8.57c0-4.36-3.56-7.92-7.92-7.92h-8.78c-4.36 0-7.92 3.56-7.92 7.92v35.19c0 4.36-3.56 7.92-7.92 7.92H8.57c-4.36 0-7.92 3.56-7.92 7.92v8.79c0 4.36 3.56 7.92 7.92 7.92h35.2c4.36 0 7.92 3.56 7.92 7.92v35.19c0 4.36 3.56 7.92 7.92 7.92h8.78c4.36 0 7.92-3.56 7.92-7.92V84.23c0-4.36 3.56-7.92 7.92-7.92h35.2c4.36 0 7.92-3.56 7.92-7.92z"></svg:path>`,
})
export class NotoV1PlusIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
