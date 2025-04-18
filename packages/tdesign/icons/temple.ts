import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTempleIcon],svg[tdesign-temple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.586L19.414 9H21v2h-1v9h2v2H2v-2h2v-9H3V9h1.586zM6 11v9h5v-9zm7 0v9h5v-9zm3.586-2L12 4.414L7.414 9z"></svg:path>`,
})
export class TdesignTempleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
