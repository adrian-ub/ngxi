import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeviantartIcon],svg[hugeicons-deviantart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 2c.827 0 1 .173 1 1v3.139c0 .303-.001.307-.171.559l-3.276 4.854c-.463.686-.695 1.028-.554 1.294c.141.265.555.265 1.383.265H18c.827 0 1 .173 1 1v2.445c0 .827-.173 1-1 1h-5.437c-1.042 0-1.076.018-1.658.88L8.797 21.56c-.29.432-.308.441-.829.441H6c-.827 0-1-.173-1-1v-3.139c0-.303.001-.307.171-.559l3.276-4.854c.463-.686.695-1.028.554-1.294c-.141-.265-.555-.265-1.383-.265H6c-.827 0-1-.173-1-1V7.444c0-.827.173-1 1-1h5.437c1.042 0 1.076-.018 1.658-.88l2.108-3.123c.29-.432.308-.441.829-.441z" color="currentColor"></svg:path>`,
})
export class HugeiconsDeviantartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
