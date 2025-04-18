import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwForwardIcon],svg[uiw-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.097 8.038v-5.19q.057-.514.568-.662q.511-.15 1.012.26l8.086 6.838a.92.92 0 0 1 .334.716q0 .42-.334.718l-8.14 6.884q-.5.346-.98.205t-.546-.613v-5.238l-6.614 5.598q-.496.396-1.046.253q-.549-.143-.534-.613V2.93q-.015-.493.451-.712q.467-.22 1.07.172z"></svg:path>`,
})
export class UiwForwardIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
