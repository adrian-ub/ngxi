import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidSquareFullIcon],svg[fa-solid-square-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 512H0V0h512z"></svg:path>`,
})
export class FaSolidSquareFullIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
