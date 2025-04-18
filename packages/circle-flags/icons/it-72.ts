import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsIt72Icon],svg[circle-flags-it-72-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="circleFlagsIt720" width="512" height="512" x="0" y="0" maskUnits="userSpaceOnUse"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask></svg:defs><svg:g mask="url(#circleFlagsIt720)"><svg:path fill="#0052b4" d="M0 0h512v512H0z"></svg:path><svg:path fill="#eee" d="m176 152l-32 32v109c0 85.6 112 111.4 112 111.4s40.6-9.3 73-35.5l29.2-34.7A88.6 88.6 0 0 0 368 293V152z"></svg:path><svg:path fill="#d80027" d="M358.2 334.2L176 152h-32v32l185 185a110 110 0 0 0 29.2-34.8"></svg:path></svg:g>`,
})
export class CircleFlagsIt72Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
