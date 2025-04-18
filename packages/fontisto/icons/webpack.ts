import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoWebpackIcon],svg[fontisto-webpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.952 18.5L11.238 24v-4.286l6.048-3.334zm.666-.595V6.385L18.07 8.456v7.381l3.548 2.048zM.666 18.5L10.38 24v-4.286L4.332 16.38zM0 17.905V6.385l3.548 2.071v7.381zM.405 5.643L10.381 0v4.143L3.952 7.691zm20.809 0L11.238 0v4.143l6.428 3.548zM10.381 18.738l-5.972-3.287V8.927l5.976 3.452zm.857 0l5.976-3.286V8.928l-5.976 3.452zM4.809 8.19l6-3.31l6 3.31l-6 3.453z"></svg:path>`,
})
export class FontistoWebpackIcon {
  readonly viewBox = input("0 0 22 24")
  readonly width = input("0.92em")
  readonly height = input("1em")
}
