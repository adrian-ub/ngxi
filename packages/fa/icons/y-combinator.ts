import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faYCombinatorIcon],svg[fa-y-combinator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m809 876l266-499H963L806 689q-24 48-44 92l-42-92l-155-312H445l263 493v324h101zM1536 0v1536H0V0z"></svg:path>`,
})
export class FaYCombinatorIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
