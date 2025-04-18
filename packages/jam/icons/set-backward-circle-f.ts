import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamSetBackwardCircleFIcon],svg[jam-set-backward-circle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.514 8.164V6a1 1 0 1 0-2 0v8a1 1 0 0 0 2 0v-2.164l3.93 2.808c.904.646 2.13.389 2.736-.576c.218-.346.334-.753.334-1.17V7.102c0-1.16-.883-2.102-1.972-2.102c-.391 0-.773.124-1.098.356zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m2.561-12.898v5.796L8.506 10z"></svg:path>`,
})
export class JamSetBackwardCircleFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
