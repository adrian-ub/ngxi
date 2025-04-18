import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laLandmarkIcon],svg[la-landmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3.906L3.625 9.062L3 9.345V12h2v11H3v5h26v-5h-2V12h2V9.344l-.625-.281zm0 2.188L25.375 10H6.625zM7 12h2v11H7zm4 0h2v11h-2zm4 0h2v11h-2zm4 0h2v11h-2zm4 0h2v11h-2zM5 25h22v1H5z"></svg:path>`,
})
export class LaLandmarkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
