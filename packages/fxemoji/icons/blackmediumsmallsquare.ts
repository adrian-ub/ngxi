import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiBlackmediumsmallsquareIcon],svg[fxemoji-blackmediumsmallsquare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#132028" d="M420 111.249C420 100.662 411.338 92 400.751 92h-291.76c-9.528 0-17.325 7.796-17.325 17.325v293.684c0 9.528 7.796 17.325 17.325 17.325H400.75c10.587 0 19.249-8.662 19.249-19.249z"></svg:path>`,
})
export class FxemojiBlackmediumsmallsquareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
