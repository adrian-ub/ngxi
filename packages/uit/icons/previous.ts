import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitPreviousIcon],svg[uit-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 7a.5.5 0 0 0-.5.5v9a.5.5 0 1 0 1 0v-9a.5.5 0 0 0-.5-.5m9.354 9.146L12.698 12l4.155-4.146a.5.5 0 0 0-.707-.707l-4.51 4.5a.5.5 0 0 0 0 .707l4.51 4.5a.5.5 0 0 0 .707 0a.5.5 0 0 0 0-.708"></svg:path>`,
})
export class UitPreviousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
