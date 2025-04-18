import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoAlignTopIcon],svg[entypo-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6L7 9h2v8h2V9h2zm8-2c0-.553-.048-1-.6-1H2.6c-.552 0-.6.447-.6 1s.048 1 .6 1h14.8c.552 0 .6-.447.6-1"></svg:path>`,
})
export class EntypoAlignTopIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
