import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSgIcon],svg[circle-flags-sg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSg0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSg0)"><svg:path fill="#eee" d="m0 256l257.7-51L512 256v256H0z"></svg:path><svg:path fill="#d80027" d="M0 0h512v256H0z"></svg:path><svg:g fill="#eee"><svg:path d="M155.8 133.6A78 78 0 0 1 217 57.5a78.2 78.2 0 0 0-16.7-1.8a78 78 0 1 0 16.7 154a78 78 0 0 1-61.2-76.1M256 61.2l5.5 17h18l-14.6 10.5l5.6 17L256 95.2l-14.5 10.5l5.6-17l-14.5-10.5h17.9z"></svg:path><svg:path d="m212.6 94.6l5.6 17H236l-14.4 10.5l5.5 17l-14.5-10.5l-14.4 10.5l5.5-17l-14.5-10.5h17.9zm86.8 0l5.5 17h17.9l-14.5 10.5l5.5 17l-14.4-10.5l-14.5 10.5l5.5-17l-14.4-10.5h17.8zm-16.7 50.1l5.5 17h17.9l-14.5 10.5l5.5 17l-14.4-10.5l-14.5 10.5l5.5-17l-14.4-10.5h17.9zm-53.4 0l5.5 17h18l-14.5 10.5l5.5 17l-14.5-10.5l-14.4 10.5l5.5-17l-14.5-10.5h17.9z"></svg:path></svg:g></svg:g>`,
})
export class CircleFlagsSgIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
