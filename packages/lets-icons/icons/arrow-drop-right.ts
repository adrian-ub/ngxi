import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowDropRightIcon],svg[lets-icons-arrow-drop-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.77 11.808l-4.458-3.715A.8.8 0 0 0 9 8.708v6.584a.8.8 0 0 0 1.312.614l4.458-3.714a.25.25 0 0 0 0-.384"></svg:path>`,
})
export class LetsIconsArrowDropRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
