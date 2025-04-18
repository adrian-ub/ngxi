import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggSketchIcon],svg[gg-sketch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.209 3h13.694l1.209 7.253l-8.056 10.933L4 10.253zm1.694 2l-.791 4.747l5.944 8.067L18 9.747L17.209 5z" clip-rule="evenodd"></svg:path><svg:path d="M8.056 8h8v2h-8z"></svg:path></svg:g>`,
})
export class GgSketchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
