import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsDjIcon],svg[circle-flags-dj-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsDj0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsDj0)"><svg:path fill="#338af3" d="M0 0h512v256l-153.2 35.7L210 256z"></svg:path><svg:path fill="#6da544" d="M210 256h302v256H0z"></svg:path><svg:path fill="#eee" d="M0 0v512l256-256z"></svg:path><svg:path fill="#d80027" d="m103.6 189.2l16.6 51h53.6l-43.4 31.6l16.6 51l-43.4-31.5l-43.4 31.5l16.6-51l-43.4-31.6H87z"></svg:path></svg:g>`,
})
export class CircleFlagsDjIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
