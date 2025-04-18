import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biSignIntersectionTFillIcon],svg[bi-sign-intersection-t-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM5 5h6v1.5H8.75V12h-1.5V6.5H5z"></svg:path>`,
})
export class BiSignIntersectionTFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
