import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFastForwardButtonIcon],svg[emojione-fast-forward-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="m19.9 14l12.8 11.9V14l19.4 18l-19.4 18V38.1L19.9 50z"></svg:path>`,
})
export class EmojioneFastForwardButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
