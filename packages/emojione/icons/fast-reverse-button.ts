import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFastReverseButtonIcon],svg[emojione-fast-reverse-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M44.1 14L31.3 25.9V14L11.9 32l19.4 18V38.1L44.1 50z"></svg:path>`,
})
export class EmojioneFastReverseButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
