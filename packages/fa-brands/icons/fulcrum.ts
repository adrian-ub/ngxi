import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsFulcrumIcon],svg[fa-brands-fulcrum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m95.75 164.14l-35.38 43.55L25 164.14l35.38-43.55zM144.23 0l-20.54 198.18L72.72 256l51 57.82L144.23 512V300.89L103.15 256l41.08-44.89zm79.67 164.14l35.38 43.55l35.38-43.55l-35.38-43.55zm-48.48 47L216.5 256l-41.08 44.89V512L196 313.82L247 256l-51-57.82L175.42 0z"></svg:path>`,
})
export class FaBrandsFulcrumIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
