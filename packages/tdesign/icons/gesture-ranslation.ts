import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGestureRanslationIcon],svg[tdesign-gesture-ranslation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.865 2.186a2.57 2.57 0 0 1 5.092.068q.284-.067.588-.068a2.57 2.57 0 0 1 2.57 2.57v.83q.274-.063.567-.063a2.567 2.567 0 0 1 2.567 2.567V15a8 8 0 0 1-8 8h-1.35a8 8 0 0 1-7.738-5.968l-1.269-4.829A2.296 2.296 0 0 1 6.698 9.96V4.755a2.57 2.57 0 0 1 2.57-2.569zm-.028 2.57a.57.57 0 1 0-1.139 0v8.749c0 1.071-1.432 1.373-1.89.462l-1.44-2.495a.296.296 0 0 0-.541.223l1.268 4.83A6 6 0 0 0 11.898 21h1.35a6 6 0 0 0 6-6V8.09a.567.567 0 1 0-1.134 0V12h-2V4.755a.57.57 0 1 0-1.138 0V12h-2V2.57a.57.57 0 0 0-1.139 0V12h-2z"></svg:path>`,
})
export class TdesignGestureRanslationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
