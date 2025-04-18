import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsIt78Icon],svg[circle-flags-it-78-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="circleFlagsIt780" width="512" height="512" x="0" y="0" maskUnits="userSpaceOnUse"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask></svg:defs><svg:g mask="url(#circleFlagsIt780)"><svg:path fill="#0052b4" d="M0 0h512v512H0z"></svg:path><svg:circle cx="256" cy="256" r="160" fill="#eee"></svg:circle><svg:path fill="#ffda44" d="M357.8 357.8a144 144 0 0 1-203.6 0L256 256zM154.2 154.2a144 144 0 0 1 203.6 0L256 256z"></svg:path><svg:path fill="#333" d="M376 248h-24v-24h-16v24h-24v16h24v24h16v-24h24zm-208 8l8-32h-16zm0 0l32 8v-16zm0 0l-8 32h16zm0 0l-32-8v16z"></svg:path><svg:path fill="#6da544" d="M248 192h16v24h-16z"></svg:path><svg:path fill="#496e2d" d="m256 120l-32 80h64z"></svg:path><svg:path fill="#338af3" d="m280 384l-48-16v-24h48zm-48-48a16 16 0 0 1-16-16h80a16 16 0 0 1-16 16"></svg:path></svg:g>`,
})
export class CircleFlagsIt78Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
