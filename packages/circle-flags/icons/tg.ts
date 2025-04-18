import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTgIcon],svg[circle-flags-tg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTg0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTg0)"><svg:path fill="#496e2d" d="M256 0h256v102.4L483.8 151l28.2 53.8v102.4l-30.5 50.7l30.5 51.7V512H0V409.6l34.7-51L0 307.1z"></svg:path><svg:path fill="#ff9811" d="M0 44.5v423V256z"></svg:path><svg:path fill="#ffda44" d="M231.7 102.4v102.4H512V102.4zM0 307.2v102.4h512V307.2H256l-128.2-26.4z"></svg:path><svg:path fill="#d80027" d="M256 307.2V0H0v307.2z"></svg:path><svg:path fill="#eee" d="m141.4 122.4l16.5 51h53.7L168 205l16.6 51l-43.4-31.5L98 256l16.5-51L71 173.5h53.7z"></svg:path></svg:g>`,
})
export class CircleFlagsTgIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
