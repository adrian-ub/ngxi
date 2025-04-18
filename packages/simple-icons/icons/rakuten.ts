import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsRakutenIcon],svg[simple-icons-rakuten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.277 21.3L3.939 24L.722 21.3zM7.6 19.276H3.939V0h6.052a6.653 6.653 0 0 1 6.65 6.646c0 2.234-1.108 4.204-2.799 5.418l5.418 7.211h-4.585l-4.486-5.979H7.6zm0-9.64h2.392a2.99 2.99 0 0 0 2.989-2.989a2.994 2.994 0 0 0-2.989-2.986H7.6z"></svg:path>`,
})
export class SimpleIconsRakutenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
