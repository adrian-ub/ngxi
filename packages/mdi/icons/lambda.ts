import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLambdaIcon],svg[mdi-lambda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 20l4.16-12.09L9.34 6H8V4h2c.42 0 .78.26.93.63L16.66 18H18v2h-2c-.43 0-.79-.27-.93-.64l-3.74-8.71L8.12 20z"></svg:path>`,
})
export class MdiLambdaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
