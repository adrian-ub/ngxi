import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoAlignVerticalMiddleIcon],svg[entypo-align-vertical-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 12l-3 3h2v4h2v-4h2zm3-7h-2V1H9v4H7l3 3zm5 5c0-.553-.048-1-.6-1H2.6c-.552 0-.6.447-.6 1c0 .551.048 1 .6 1h14.8c.552 0 .6-.449.6-1"></svg:path>`,
})
export class EntypoAlignVerticalMiddleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
