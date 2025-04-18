import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wpfSentIcon],svg[wpf-sent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2v8.5L15 13L0 15.5V24l26-11z"></svg:path>`,
})
export class WpfSentIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
