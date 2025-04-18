import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilCaretRightIcon],svg[uil-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.5 11.13l-14-8.08a1 1 0 0 0-1 0a1 1 0 0 0-.5.87v16.16a1 1 0 0 0 .5.87a1 1 0 0 0 1 0l14-8.08a1 1 0 0 0 0-1.74M6 18.35V5.65L17 12Z"></svg:path>`,
})
export class UilCaretRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
