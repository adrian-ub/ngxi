import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloseSquareFillIcon],svg[lets-icons-close-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0M6.586 16l.707-.707L10.586 12L7.293 8.707L6.586 8L8 6.586l.707.707L12 10.586l3.293-3.293l.707-.707L17.414 8l-.707.707L13.414 12l3.293 3.293l.707.707L16 17.414l-.707-.707L12 13.414l-3.293 3.293l-.707.707z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsCloseSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
