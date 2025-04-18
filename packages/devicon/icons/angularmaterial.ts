import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconAngularmaterialIcon],svg[devicon-angularmaterial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffa726" d="M63.934.656L5.25 21.66l8.863 77.719l49.82 27.77l49.887-27.77l9.059-77.719Zm0 0"></svg:path><svg:path fill="#fb8c00" d="M63.934.656v126.492l49.886-27.77l9.059-77.718Zm0 0"></svg:path><svg:path fill="#ffe0b2" d="m72.797 96.688l-41.55-20.02l23.827-14.703L96.887 82.05Zm0 0"></svg:path><svg:path fill="#fff3e0" d="m72.797 81.262l-41.55-20.086l23.827-14.637l41.813 20.086Zm0 0"></svg:path><svg:path fill="#fff" d="m72.797 65.84l-41.55-20.09l23.827-14.703l41.813 20.086Zm0 0"></svg:path>`,
})
export class DeviconAngularmaterialIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
