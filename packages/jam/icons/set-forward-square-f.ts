import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamSetForwardSquareFIcon],svg[jam-set-forward-square-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.514 11.836V14a1 1 0 0 0 2 0V6a1 1 0 1 0-2 0v2.164L8.585 5.356A1.9 1.9 0 0 0 7.487 5c-1.09 0-1.973.941-1.973 2.102v5.796c0 .417.117.824.335 1.17c.606.965 1.831 1.222 2.736.576l3.93-2.808zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m3.496 7.136l4.056 2.898l-4.056 2.898z"></svg:path>`,
})
export class JamSetForwardSquareFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
