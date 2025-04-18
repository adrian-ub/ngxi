import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsMagicIcon],svg[grommet-icons-magic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m2.5 19.5l17-17l2 2l-17 17zm.5.5L15 8l1 1L4 21zM5.5 3l-.5.5l.5.5l.5-.5zm6 0l-.5.5l.5.5l.5-.5zm-3 3l-.5.5l.5.5l.5-.5zm12 6l-.5.5l.5.5l.5-.5zm0 5l-.5.5l.5.5l.5-.5z"></svg:path>`,
})
export class GrommetIconsMagicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
