import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRubyIcon],svg[arcticons-ruby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M32.035 33.12c-.03-.33-4.554-15.34-4.554-15.34l14.115-.49l-11.159-8.455l6.29-3.09M32.035 33.12l-14.77-5.453l-4.049 14.63l-5.042-13.342l-2.556 6.123"></svg:path><svg:path d="M13.102 42.376c9.92-4.07 26.7-7.791 29.332-30.306m.001 0c.572-6.434-2.727-6.285-5.483-6.47m0 0l-10.46.227"></svg:path><svg:path d="m32.216 33.124l8.477 7.64c-.012-.173 1.686-28.396 1.686-28.396"></svg:path><svg:path d="m38.526 25.365l2.167 15.4l-27.397 1.596m27.397-1.596l-19.058-1.709m-8.533 3.32c-6.68.304-8.004-2.396-7.508-7.385L7.14 25.37"></svg:path><svg:ellipse cx="18.814" cy="17.861" rx="15.372" ry="6.751" transform="rotate(-46.196 18.814 17.86)"></svg:ellipse></svg:g>`,
})
export class ArcticonsRubyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
