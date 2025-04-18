import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonEyeFillIcon],svg[iconamoon-eye-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.069 11.636C2.803 7.194 6.884 4 12 4s9.197 3.194 10.932 7.636a1 1 0 0 1 0 .728C21.197 16.806 17.116 20 12 20s-9.197-3.194-10.931-7.636a1 1 0 0 1 0-.728M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonEyeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
