import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsOmIcon],svg[circle-flags-om-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsOm0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsOm0)"><svg:path fill="#eee" d="M189.2 0H512v167l-347.5 24.6z"></svg:path><svg:path fill="#6da544" d="m163 320l349 25v167H189.2z"></svg:path><svg:path fill="#d80027" d="M0 0h189.2v167H512v178H189.2v167H0z"></svg:path><svg:path fill="#eee" d="M156.6 112.7L133 89l-15.7 15.8L101.5 89L78 112.7l15.8 15.7L78 144l23.6 23.6l15.8-15.7l15.7 15.7l23.6-23.6l-15.7-15.7z"></svg:path></svg:g>`,
})
export class CircleFlagsOmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
