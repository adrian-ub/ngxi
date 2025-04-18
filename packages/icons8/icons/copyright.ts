import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8CopyrightIcon],svg[icons8-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16S9.913 5 16 5m-.094 5c-3.324 0-6 2.676-6 6s2.676 6 6 6c2.4 0 4.45-1.44 5.406-3.47l-1.812-.843C18.855 19.058 17.506 20 15.906 20c-2.276 0-4-1.724-4-4s1.724-4 4-4c1.6 0 2.95.942 3.594 2.313l1.813-.844c-.956-2.03-3.007-3.47-5.407-3.47z"></svg:path>`,
})
export class Icons8CopyrightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
