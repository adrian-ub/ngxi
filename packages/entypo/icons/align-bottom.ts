import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoAlignBottomIcon],svg[entypo-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11h-2V3H9v8H7l3 3zm4.4 4H2.6c-.552 0-.6.447-.6 1s.048 1 .6 1h14.8c.552 0 .6-.447.6-1s-.048-1-.6-1"></svg:path>`,
})
export class EntypoAlignBottomIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
