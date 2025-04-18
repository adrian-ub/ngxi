import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhComedyIcon],svg[whh-comedy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-145-36-262-135.5T66.5 646T0 347V64Q290 0 512 0t512 64v283q0 156-66.5 299T774 888.5T512 1024M320 192q-53 0-90.5 19T192 256.5t37.5 45T320 320t90.5-18.5t37.5-45t-37.5-45.5t-90.5-19m384 0q-53 0-90.5 19T576 256.5t37.5 45T704 320t90.5-18.5t37.5-45t-37.5-45.5t-90.5-19M512 640q-60 0-171-68q-82-50-104-56q-43-7-45 49q0 37 49.5 85T368 733t144 35t144-35t126.5-83t49.5-85q0-52-31-51q-24 0-103 49q-104 64-157 74q-15 3-29 3"></svg:path>`,
})
export class WhhComedyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
