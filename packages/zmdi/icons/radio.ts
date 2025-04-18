import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiRadioIcon],svg[zmdi-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 115L296 5l15 36l-177 71h250q18 0 30.5 12.5T427 155v256q0 17-12.5 29.5T384 453H43q-18 0-30.5-12.5T0 411V155q0-14 7.5-24.5T26 115m80.5 296q26.5 0 45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5t-18.5 45T61.5 392t45 19M384 240v-85H43v85h256v-43h42v43z"></svg:path>`,
})
export class ZmdiRadioIcon {
  readonly viewBox = input("0 0 432 456")
  readonly width = input("0.95em")
  readonly height = input("1em")
}
