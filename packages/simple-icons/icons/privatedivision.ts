import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsPrivatedivisionIcon],svg[simple-icons-privatedivision-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.384.248A.42.42 0 0 0 11.998 0a.43.43 0 0 0-.387.248L6.172 12.002l5.441 11.752a.428.428 0 0 0 .616.18a.43.43 0 0 0 .157-.18l5.443-11.752zm-.386 18.449l-3.101-6.695l3.101-6.697l3.1 6.697z"></svg:path>`,
})
export class SimpleIconsPrivatedivisionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
