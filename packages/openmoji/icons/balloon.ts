import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBalloonIcon],svg[openmoji-balloon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D22F27" d="m33.976 42.691l.03 6.459l.03 6.459l-5.919-3.807l-5.92-3.807l5.89-2.652z"></svg:path><svg:circle cx="45" cy="27" r="23" fill="#EA5A47"></svg:circle><svg:path fill="#D22F27" d="M60.827 10.549a23 23 0 0 0-4.361-3.417c5.36 8.847 4.224 20.525-3.418 28.166s-19.32 8.778-28.166 3.418a23 23 0 0 0 3.417 4.36c8.982 8.982 23.545 8.982 32.528 0s8.982-23.545 0-32.527"></svg:path><svg:g fill="none" stroke="#000" stroke-miterlimit="10"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.122" d="m34 47.21l.01 1.94l.03 6.46l-5.92-3.81L22.2 48l5.89-2.66l1.95-.88"></svg:path><svg:circle cx="45" cy="27" r="23" stroke-width="2"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.725 65.09c.505.04 1.026 0 1.547-.128c2.704-.665 4.41-3.459 3.812-6.24"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23.14 58.907a4.9 4.9 0 0 1-.258-1.53c-.024-2.785 2.26-5.13 5.102-5.237"></svg:path></svg:g>`,
})
export class OpenmojiBalloonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
