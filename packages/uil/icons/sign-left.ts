import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilSignLeftIcon],svg[uil-sign-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5h-3V3a1 1 0 0 0-2 0v2H6a1 1 0 0 0-.78.38l-2 2.5a1 1 0 0 0 0 1.24l2 2.5A1 1 0 0 0 6 12h5v8H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2v-8h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-1 5H6.48l-1.2-1.5L6.48 7H15Z"></svg:path>`,
})
export class UilSignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
