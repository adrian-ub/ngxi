import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimKeyholeSquareFullIcon],svg[uim-keyhole-square-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10a2 2 0 1 0-3 1.723V15a1 1 0 0 0 2 0v-3.277A1.99 1.99 0 0 0 14 10"></svg:path><svg:path fill="currentColor" d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-8 9.723V15a1 1 0 0 1-2 0v-3.277a2 2 0 1 1 2 0" opacity=".5"></svg:path>`,
})
export class UimKeyholeSquareFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
