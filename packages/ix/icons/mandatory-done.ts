import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMandatoryDoneIcon],svg[ix-mandatory-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m437.361 189.44l45.255 45.255L245.361 471.95L114.773 341.362l45.255-45.255l85.333 85.34zM284.121 42.667l-9.42 83.394l77.022-34.078l16.9 54.303l-81.177 15.792l54.303 60.676L295.48 256l-39.619-72.034L216.52 256l-46.545-33.246l54.303-60.676l-80.9-15.792L160 91.983l77.021 34.078l-9.42-83.394z"></svg:path>`,
})
export class IxMandatoryDoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
