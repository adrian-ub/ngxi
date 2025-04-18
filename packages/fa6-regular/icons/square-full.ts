import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6RegularSquareFullIcon],svg[fa6-regular-square-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 48v416H48V48zM48 0H0v512h512V0z"></svg:path>`,
})
export class Fa6RegularSquareFullIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
