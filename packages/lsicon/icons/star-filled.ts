import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconStarFilledIcon],svg[lsicon-star-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 1.91l2.035 3.943l3.938.845l-2.71 2.868l.3 4.33L8 11.867l-3.563 2.029l.299-4.33l-2.71-2.868l3.938-.845z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconStarFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
