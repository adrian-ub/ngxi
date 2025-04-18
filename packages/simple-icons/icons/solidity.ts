import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsSolidityIcon],svg[simple-icons-solidity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.409 6.608L7.981.255l3.572 6.353zM8.411 0l3.569 6.348L15.552 0zm4.036 17.392l3.572 6.354l3.575-6.354zm-.608-10.284h-7.43l3.715 6.605zm.428-.25h7.428L15.982.255zM15.589 24l-3.569-6.349L8.448 24zm-3.856-6.858H4.306l3.712 6.603zm.428-.25h7.433l-3.718-6.605z"></svg:path>`,
})
export class SimpleIconsSolidityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
