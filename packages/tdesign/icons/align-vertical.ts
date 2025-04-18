import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAlignVerticalIcon],svg[tdesign-align-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6.586V0h-2v6.586L9.707 5.293L9 4.586L7.586 6l.707.707l3 3l.707.707l.707-.707l3-3L16.414 6L15 4.586l-.707.707zM21 13H3v-2h18zm-9 .586l.707.707l3 3l.707.707L15 19.414l-.707-.707L13 17.414V24h-2v-6.586l-1.293 1.293l-.707.707L7.586 18l.707-.707l3-3z"></svg:path>`,
})
export class TdesignAlignVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
