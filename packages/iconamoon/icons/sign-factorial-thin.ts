import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonSignFactorialThinIcon],svg[iconamoon-sign-factorial-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-width="1.5" d="M12 19.5h.01v.01H12z"></svg:path><svg:path stroke-linecap="round" d="M11.523 4.5L12 15l.477-10.5a.478.478 0 1 0-.954 0"></svg:path></svg:g>`,
})
export class IconamoonSignFactorialThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
