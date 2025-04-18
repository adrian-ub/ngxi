import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityFlaskSolidIcon],svg[clarity-flask-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31.49 27.4L23 14.94V4h1a1 1 0 0 0 0-2H12.08a1 1 0 0 0 0 2H13v10.94L4.58 27.31a4.3 4.3 0 0 0-.78 3A4.23 4.23 0 0 0 8 34h19.86A4.36 4.36 0 0 0 31 32.8a4.23 4.23 0 0 0 .49-5.4M15 15.49V4h6v11.49L26.15 23H9.85Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityFlaskSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
