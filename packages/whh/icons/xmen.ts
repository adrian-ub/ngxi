import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhXmenIcon],svg[whh-xmen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m0-192q78 0 148-36L512 648L364 796q70 36 148 36M228 660l148-148l-148-148q-36 70-36 148t36 148m284-468q-78 0-148 36l148 148l148-148q-70-36-148-36m284 172L648 512l148 148q36-70 36-148t-36-148"></svg:path>`,
})
export class WhhXmenIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
