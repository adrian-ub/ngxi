import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiBlacksmallsquareIcon],svg[fxemoji-blacksmallsquare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#132028" d="M371 154.504c0-7.427-6.077-13.504-13.504-13.504H152.82c-6.684 0-12.154 5.469-12.154 12.154V359.18c0 6.684 5.469 12.154 12.154 12.154h204.676c7.427 0 13.504-6.077 13.504-13.504z"></svg:path>`,
})
export class FxemojiBlacksmallsquareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
