import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhLaunchIcon],svg[whh-launch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m733 1017l-93-249h-23q-8 23-24 66t-23 62H448v64q0 27-19 45.5t-45.5 18.5t-45-19t-18.5-45v-64H197q-6-19-22-62t-24-66h-23l-93 249Q0 999 0 960V768q0-27 51-77.5t77-50.5q0-136 32.5-267T252 142T384 0q73 42 132 142t91.5 231T640 640q26 0 77 50.5t51 77.5v192q0 39-35 57M384 256q-53 0-90.5 37.5T256 384t37.5 90.5T384 512t90.5-37.5T512 384t-37.5-90.5T384 256"></svg:path>`,
})
export class WhhLaunchIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
