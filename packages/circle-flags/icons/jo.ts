import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsJoIcon],svg[circle-flags-jo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsJo0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsJo0)"><svg:path fill="#eee" d="m126 158l127.8-10.3L512 167v178l-254.9 32.3L126 335.9z"></svg:path><svg:path fill="#333" d="M0 0h512v167H107z"></svg:path><svg:path fill="#6da544" d="M107 345h405v167H0z"></svg:path><svg:path fill="#d80027" d="M0 0v512l256-256z"></svg:path><svg:path fill="#eee" d="m101.6 200.3l14 29.4l31.8-7.3l-14.2 29.3l25.5 20.2l-31.8 7.2l.1 32.6l-25.4-20.4l-25.4 20.4V279l-31.7-7.2l25.5-20l-14.2-29.4l31.8 7.3z"></svg:path></svg:g>`,
})
export class CircleFlagsJoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
