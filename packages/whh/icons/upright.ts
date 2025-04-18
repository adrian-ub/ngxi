import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhUprightIcon],svg[whh-upright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 830H832q-26 0-45-18.5T768 766V442l-567 562q-18 19-45 19t-46-19l-91-90Q0 895 0 868.5T19 823l572-567H256q-26 0-45-19t-19-45V64q0-27 19-45.5T256 0h704q27 0 45.5 18.5T1024 64v702q0 27-19 45.5T960 830"></svg:path>`,
})
export class WhhUprightIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
