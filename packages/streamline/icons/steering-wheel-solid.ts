import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSteeringWheelSolidIcon],svg[streamline-steering-wheel-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.315 5.25a5.002 5.002 0 0 1 9.37 0zm-.309 1.5a5 5 0 0 0 4.244 5.194V9.143L4.156 6.75zm5.744 5.194a5 5 0 0 0 4.244-5.194h-2.15L7.75 9.143zM7 0a7 7 0 1 0 0 14A7 7 0 0 0 7 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSteeringWheelSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
