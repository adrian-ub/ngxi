import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowDropLeftIcon],svg[lets-icons-arrow-drop-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.23 11.808l4.458-3.715A.8.8 0 0 1 15 8.708v6.584a.8.8 0 0 1-1.312.614L9.23 12.192a.25.25 0 0 1 0-.384"></svg:path>`,
})
export class LetsIconsArrowDropLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
