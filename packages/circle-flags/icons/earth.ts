import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsEarthIcon],svg[circle-flags-earth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsEarth0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsEarth0)"><svg:path fill="#0052b4" d="M0 0h512v512H0z"></svg:path><svg:path fill="#eee" d="M302.7 233.7a103.1 103.1 0 0 0 0 206a103.1 103.1 0 0 0 0-206m0 20c46 0 83 37 83 83s-37 83-83 83s-83-37-83-83s37-83 83-83"></svg:path><svg:path fill="#eee" d="M209.4 72.3a103.1 103.1 0 0 0 0 206a103.1 103.1 0 0 0 0-206m0 20c46 0 83 37 83 83s-37 83-83 83s-83-37-83-83s37-83 83-83"></svg:path><svg:path fill="#eee" d="M302.7 72.3a103.1 103.1 0 0 0 0 206a103.1 103.1 0 0 0 0-206m0 20c46 0 83 37 83 83s-37 83-83 83s-83-37-83-83s37-83 83-83"></svg:path><svg:path fill="#eee" d="M349.2 153a103.1 103.1 0 0 0 0 206a103.1 103.1 0 0 0 0-206m0 20c46 0 83 37 83 83s-37 83-83 83s-83-37-83-83s37-83 83-83"></svg:path><svg:path fill="#eee" d="M209.4 233.7a103.1 103.1 0 0 0 0 206a103.1 103.1 0 0 0 0-206m0 20c46 0 83 37 83 83s-37 83-83 83s-83-37-83-83s37-83 83-83"></svg:path><svg:path fill="#eee" d="M162.8 153a103.1 103.1 0 0 0 0 206a103.1 103.1 0 0 0 0-206m0 20c46 0 83 37 83 83s-37 83-83 83s-83-37-83-83s37-83 83-83"></svg:path><svg:path fill="#eee" d="M256 153.1a103.1 103.1 0 0 0 0 206a103.1 103.1 0 0 0 0-206m0 20c46 0 83 37 83 83c0 45.9-37 83-83 83s-83-37.1-83-83c0-46 37-83 83-83"></svg:path></svg:g>`,
})
export class CircleFlagsEarthIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
