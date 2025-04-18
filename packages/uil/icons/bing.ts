import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilBingIcon],svg[uil-bing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.1 8.6l1.7 4.3l2.8 1.3L9 17.5V3.4L5 2v17.8L9 22l10-5.8v-4.5z"></svg:path>`,
})
export class UilBingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
