import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSeaIcon],svg[whh-sea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.684 526q-53-18-118-15t-125.5 20.5t-130 39t-132 40.5t-132.5 25.5t-130-5.5q-54-11-91-35.5t-37-52.5t38-42t90-4q43 19 103 16t121-20.5t133-39t139-41t139-26t133 5.5q54 11 91 35.5t37 51.5q0 30-39.5 46t-88.5 1m0-384q-53-18-118-15t-125.5 20.5t-130 39t-132 40.5t-132.5 25.5t-130-5.5q-54-11-91-35.5t-37-52.5t38-42t90-4q43 19 103 16t121-20.5t133-39t139-41t139-26t133 5.5q54 11 91 35.5t37 51.5q0 30-39.5 46t-88.5 1m-768 739q43 19 103 16t121-20.5t133-39t139-41t139-26t133 5.5q54 11 91 35.5t37 51.5q0 30-39.5 46t-88.5 1q-53-18-118-15t-125.5 20.5t-130 39t-132 40.5t-132.5 25.5t-130-5.5q-54-11-91-35.5t-37-52.5t38-42t90-4"></svg:path>`,
})
export class WhhSeaIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
