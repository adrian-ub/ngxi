import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7DropTriangleFillIcon],svg[f7-drop-triangle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.59 50.207h36.82c3.516 0 5.719-2.531 5.719-5.719a5.56 5.56 0 0 0-.75-2.812l-18.445-33c-1.055-1.899-2.977-2.883-4.922-2.883c-1.922 0-3.89.984-4.946 2.883L4.645 41.699c-.516.89-.774 1.828-.774 2.79c0 3.187 2.227 5.718 5.719 5.718m18.422-8.18c-3.586 0-6.516-2.812-6.516-6.375c0-2.062.985-4.008 1.969-5.812l3.937-7.266c.164-.258.328-.422.61-.422s.492.164.61.422l3.937 7.266c.96 1.805 1.968 3.75 1.968 5.812c0 3.563-2.93 6.375-6.515 6.375"></svg:path>`,
})
export class F7DropTriangleFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
