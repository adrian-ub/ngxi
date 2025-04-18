import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignThumbDown2FilledIcon],svg[tdesign-thumb-down-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.73 21.664l1.716.572L17.15 13.9V2H6.516a3 3 0 0 0-2.965 2.544l-1.184 7.7A3 3 0 0 0 5.332 15.7H9.2v2.454a3.7 3.7 0 0 0 2.53 3.51M22 13.9V2h-2.85v11.9z"></svg:path>`,
})
export class TdesignThumbDown2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
