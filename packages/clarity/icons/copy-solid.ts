import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityCopySolidIcon],svg[clarity-copy-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 3.56A1.56 1.56 0 0 0 25.43 2H5.57A1.56 1.56 0 0 0 4 3.56v24.88A1.56 1.56 0 0 0 5.57 30h.52V4.07H27Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:rect width="23" height="28" x="8" y="6" fill="currentColor" class="clr-i-solid clr-i-solid-path-2" rx="1.5" ry="1.5"></svg:rect><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityCopySolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
