import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFaceDissatisfiedFilledIcon],svg[carbon-face-dissatisfied-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-4.5 9A2.5 2.5 0 1 1 9 13.5a2.48 2.48 0 0 1 2.54-2.5Zm9.64 12.92a6 6 0 0 0-10.28 0l-1.71-1a8 8 0 0 1 13.7 0ZM20.5 16a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class CarbonFaceDissatisfiedFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
