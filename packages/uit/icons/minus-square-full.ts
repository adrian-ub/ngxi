import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitMinusSquareFullIcon],svg[uit-minus-square-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 12.5h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1M21.5 2h-19a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5v-19a.5.5 0 0 0-.5-.5M21 21H3V3h18z"></svg:path>`,
})
export class UitMinusSquareFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
