import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsRoad1Icon],svg[lineicons-road-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.749 5.75a.75.75 0 0 0-1.5 0v1.563a.75.75 0 0 0 1.5 0zm0 4.688a.75.75 0 0 0-1.5 0v3.124a.75.75 0 0 0 1.5 0zm0 6.25a.75.75 0 0 0-1.5 0v1.562a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.382 2a2.25 2.25 0 0 0-2.243 2.068l-1.256 15.5A2.25 2.25 0 0 0 6.125 22h11.747a2.25 2.25 0 0 0 2.243-2.432l-1.257-15.5A2.25 2.25 0 0 0 16.615 2zm-.748 2.19a.75.75 0 0 1 .748-.69h9.233c.391 0 .716.3.748.69l1.257 15.5a.75.75 0 0 1-.748.81H6.125a.75.75 0 0 1-.747-.81z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsRoad1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
