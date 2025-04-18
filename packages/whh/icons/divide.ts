import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhDivideIcon],svg[whh-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 640H64q-27 0-45.5-19T0 576V448q0-27 19-45.5T64 384h896q27 0 45.5 18.5T1024 448v128q0 26-18.5 45T960 640M576 256H448q-27 0-45.5-19T384 192V64q0-27 19-45.5T448 0h128q27 0 45.5 18.5T640 64v128q0 26-18.5 45T576 256M448 768h128q27 0 45.5 18.5T640 832v128q0 27-19 45.5t-45 18.5H448q-27 0-45.5-19T384 960V832q0-27 19-45.5t45-18.5"></svg:path>`,
})
export class WhhDivideIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
