import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7TriangleFillIcon],svg[f7-triangle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.59 50.207h36.82c3.516 0 5.719-2.531 5.719-5.719a5.56 5.56 0 0 0-.75-2.812l-18.445-33c-1.055-1.899-2.977-2.883-4.922-2.883c-1.922 0-3.89.984-4.946 2.883L4.645 41.699c-.516.89-.774 1.828-.774 2.79c0 3.187 2.227 5.718 5.719 5.718"></svg:path>`,
})
export class F7TriangleFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
