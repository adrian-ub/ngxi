import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsHomeIcon],svg[rivet-icons-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 .798l7 4.667V15H9v-4.444H7V15H1V5.465zM3 6.535V13h2V8.556h6V13h2V6.535L8 3.202z"></svg:path>`,
})
export class RivetIconsHomeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
