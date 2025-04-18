import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoVueIcon],svg[famicons-logo-vue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256 144.03l-55.49-96.11h-79.43L256 281.61L390.92 47.92h-79.43z"></svg:path><svg:path fill="currentColor" d="M409.4 47.92L256 313.61L102.6 47.92H15.74L256 464.08L496.26 47.92z"></svg:path>`,
})
export class FamiconsLogoVueIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
