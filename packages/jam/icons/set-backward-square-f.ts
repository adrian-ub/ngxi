import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamSetBackwardSquareFIcon],svg[jam-set-backward-square-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.514 8.164V6a1 1 0 1 0-2 0v8a1 1 0 0 0 2 0v-2.164l3.93 2.808c.904.646 2.13.389 2.736-.576c.218-.346.334-.753.334-1.17V7.102c0-1.16-.883-2.102-1.972-2.102c-.391 0-.773.124-1.098.356zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m8.548 7.12v5.796l-4.055-2.898z"></svg:path>`,
})
export class JamSetBackwardSquareFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
