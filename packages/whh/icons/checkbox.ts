import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCheckboxIcon],svg[whh-checkbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1023h-768q-53 0-90.5-37.5T.428 895V127q0-53 37.5-90t90.5-37h768q27 0 53 11l-117 116h-640q-26 0-45 19t-19 45v640q0 27 18.5 45.5t45.5 18.5h640q26 0 45-18.5t19-45.5V447l128-128v576q0 53-37.5 90.5t-90.5 37.5m-338-339q-19 19-47 18q-29 1-48-19l-188-187q-19-20-19-47.5t19.5-46.5t46.5-19t47 19l144 144l488-491q23 33 23 72v68q-8 31-20 42z"></svg:path>`,
})
export class WhhCheckboxIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
