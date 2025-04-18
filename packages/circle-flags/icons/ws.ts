import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsWsIcon],svg[circle-flags-ws-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsWs0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsWs0)"><svg:path fill="#d80027" d="M0 256L256 0h256v512H0z"></svg:path><svg:path fill="#0052b4" d="M0 0h256v256H0z"></svg:path><svg:path fill="#eee" d="m205 167l4.2 12.7h13.4l-10.8 7.9l4.1 12.7l-10.8-7.8l-10.9 7.8l4.1-12.7l-10.8-7.9h13.4zM137.8 66.8l7 21.2H167l-18.1 13.2l6.9 21.2l-18.1-13.1l-18 13.1l6.8-21.2l-18-13.2h22.3zM204.5 89l6.9 21.3h22.3l-18 13.1l6.9 21.3l-18.1-13.1l-18.1 13.1l7-21.3l-18.2-13.1h22.4zm-52.8 89l6.9 21.3H181l-18.1 13.2l6.9 21.2l-18.1-13.1l-18 13.1l6.8-21.2l-18-13.2h22.3zm-58.5-55.6l6.9 21.3h22.3l-18 13.1l6.9 21.3l-18.1-13.2L75 178.1l6.9-21.3l-18-13.1h22.3z"></svg:path></svg:g>`,
})
export class CircleFlagsWsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
