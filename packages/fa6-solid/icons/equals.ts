import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidEqualsIcon],svg[fa6-solid-equals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 128c-17.7 0-32 14.3-32 32s14.3 32 32 32h352c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 192c-17.7 0-32 14.3-32 32s14.3 32 32 32h352c17.7 0 32-14.3 32-32s-14.3-32-32-32z"></svg:path>`,
})
export class Fa6SolidEqualsIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
