import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDelAltDuotoneLineIcon],svg[lets-icons-del-alt-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="m17.004 17.98l1.711-9.415c.117-.642.176-.963.013-1.049s-.394.145-.857.604l-.886.88L12 10L6.996 9l-.863-.865c-.465-.465-.697-.698-.86-.612c-.162.085-.104.408.014 1.054l1.71 9.402a.1.1 0 0 0 .018.036a7.05 7.05 0 0 0 9.97 0a.1.1 0 0 0 .019-.036"></svg:path><svg:ellipse cx="12" cy="7" stroke="currentColor" stroke-linecap="round" stroke-width="1.2" rx="7" ry="3"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="m5 7l1.996 10.98a.1.1 0 0 0 .019.035v0a7.05 7.05 0 0 0 9.97 0v0a.1.1 0 0 0 .019-.036L19 7"></svg:path></svg:g>`,
})
export class LetsIconsDelAltDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
