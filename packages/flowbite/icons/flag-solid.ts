import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteFlagSolidIcon],svg[flowbite-flag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 3.294c1.924.95 3.422 1.69 5.472.692a1 1 0 0 1 1.438.9v9.54a1 1 0 0 1-.562.9c-2.981 1.45-5.382.24-7.25-.701a39 39 0 0 0-.622-.31c-1.033-.497-1.887-.812-2.756-.77c-.76.036-1.672.357-2.81 1.396V21a1 1 0 1 1-2 0V4.971a1 1 0 0 1 .297-.71c1.522-1.506 2.967-2.185 4.417-2.255c1.407-.068 2.653.453 3.72.967q.337.163.655.32Z"></svg:path>`,
})
export class FlowbiteFlagSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
