import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemCodeIcon],svg[tdesign-system-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h22v16H1zm2 2v12h18V4zm12 2.086L18.914 10L15 13.914L13.586 12.5l2.5-2.5l-2.5-2.5zM10.414 7.5l-2.5 2.5l2.5 2.5L9 13.914L5.086 10L9 6.086zM3 20h18v2H3z"></svg:path>`,
})
export class TdesignSystemCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
