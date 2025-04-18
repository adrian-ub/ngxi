import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaDisplayIcon],svg[gala-display-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="16"><svg:path d="M 32.045863,15.996967 H 223.95413"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 16.053507,31.994108 2e-6,143.926412"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M 239.94649,31.989325 V 175.92052"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M 32.045861,15.996971 A 15.992355,15.992355 0 0 0 16.053507,31.989325"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 223.95413,15.996971 a 15.992355,15.992355 0 0 1 15.99236,15.992354"></svg:path><svg:path d="M 223.95413,191.91287 H 32.04587"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 223.95413,191.91287 a 15.992354,15.992354 0 0 0 15.99236,-15.99235"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M 32.04587,191.91287 A 15.992354,15.992354 0 0 1 16.053504,175.92052"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M 191.96942,239.88994 H 64.030574"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 143.99235,191.91288 v 47.97706"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 112.00764,191.91288 v 47.97706"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M 16.053512,159.92816 H 239.94649"></svg:path></svg:g>`,
})
export class GalaDisplayIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
