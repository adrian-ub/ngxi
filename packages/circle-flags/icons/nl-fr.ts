import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNlFrIcon],svg[circle-flags-nl-fr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNlFr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNlFr0)"><svg:path fill="#eee" d="M0 0v51.7l32 103.4H0v103.5L32 362H0v150h150v-32l103.4 32h103.5v-32l103.4 32H512v-51.7l-32-103.4h32V253.4L480 150h32V0H362v32L258.6 0H155.1v32L51.7 0z"></svg:path><svg:path fill="#0052b4" d="M51.7 0L512 460.3V356.9L155.1 0zm206.9 0L512 253.4V150L362 0zM0 51.8v103.4L356.8 512h103.4zm0 206.9v103.4L149.9 512h103.5z"></svg:path><svg:path fill="#d80027" d="M261.6 222.2a18 18 0 0 0-25.5 0a18 18 0 0 0-.6.6a38 38 0 0 0 53.7 53.7a18 18 0 0 0 .6-.6a18 18 0 0 0 0-25.5a18 18 0 0 0-25.4 0a2 2 0 0 1-2.8 0a2 2 0 0 1 0-2.8a18 18 0 0 0 0-25.4m-100-100a18 18 0 0 0-25.5 0a18 18 0 0 0-.6.6a38 38 0 0 0 53.7 53.7a18 18 0 0 0 .6-.6a18 18 0 0 0 0-25.5a18 18 0 0 0-25.4 0a2 2 0 0 1-2.8 0a2 2 0 0 1 0-2.8a18 18 0 0 0 0-25.4m200 200a18 18 0 0 0-25.5 0a18 18 0 0 0-.6.6a38 38 0 0 0 53.7 53.7a18 18 0 0 0 .6-.6a18 18 0 0 0 0-25.5a18 18 0 0 0-25.4 0a2 2 0 0 1-2.8 0a2 2 0 0 1 0-2.8a18 18 0 0 0 0-25.4m-254-45.9a18 18 0 0 0-25.5 0a18 18 0 0 0-.6.5a38 38 0 0 0 53.7 53.8a18 18 0 0 0 .6-.6a18 18 0 0 0 0-25.5a18 18 0 0 0-25.4 0a2 2 0 0 1-2.8 0a2 2 0 0 1 0-2.9a18 18 0 0 0 0-25.3m100 100a18 18 0 0 0-25.5 0a18 18 0 0 0-.6.6a38 38 0 0 0 53.7 53.7a18 18 0 0 0 .6-.6a18 18 0 0 0 0-25.5a18 18 0 0 0-25.4 0a2 2 0 0 1-2.8 0a2 2 0 0 1 0-2.8a18 18 0 0 0 0-25.4m207-207a18 18 0 0 0-25.5 0a18 18 0 0 0-.6.5a38 38 0 0 0 53.7 53.8a18 18 0 0 0 .6-.6a18 18 0 0 0 0-25.5a18 18 0 0 0-25.4 0a2 2 0 0 1-2.8 0a2 2 0 0 1 0-2.9a18 18 0 0 0 0-25.3m-100-100a18 18 0 0 0-25.5 0a18 18 0 0 0-.6.6a38 38 0 0 0 53.7 53.7a18 18 0 0 0 .6-.6a18 18 0 0 0 0-25.6a18 18 0 0 0-25.4 0a2 2 0 0 1-2.8 0a2 2 0 0 1 0-2.8a18 18 0 0 0 0-25.3"></svg:path></svg:g>`,
})
export class CircleFlagsNlFrIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
