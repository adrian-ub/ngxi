import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDimondFillIcon],svg[lets-icons-dimond-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.748 13.748l4.838 4.838c.666.667 1 1 1.414 1s.748-.333 1.414-1l4.838-4.838c.85-.85 1.276-1.276 1.406-1.829s-.06-1.123-.44-2.264l-.306-.92c-.44-1.32-.66-1.98-1.184-2.357S16.508 6 15.117 6H8.883c-1.391 0-2.087 0-2.61.378c-.525.377-.745 1.037-1.185 2.357l-.306.92c-.38 1.14-.57 1.711-.44 2.264s.556.979 1.406 1.83"></svg:path>`,
})
export class LetsIconsDimondFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
