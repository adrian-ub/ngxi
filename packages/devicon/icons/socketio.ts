import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconSocketioIcon],svg[devicon-socketio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#010101" fill-rule="evenodd"><svg:path fill-rule="nonzero" d="M63.951.001C28.696.001.001 28.696.001 63.951s28.695 63.95 63.95 63.95s63.95-28.695 63.95-63.95S99.206.001 63.95.001zm0 10.679c29.484 0 53.272 23.787 53.272 53.271s-23.788 53.272-53.272 53.272s-53.272-23.787-53.272-53.272S34.467 10.68 63.951 10.68" color="#000"></svg:path><svg:path d="M48.39 60.716c14.004-11.44 27.702-23.278 42.011-34.384c-7.505 11.533-15.224 22.913-22.729 34.445c-6.437.03-12.875.03-19.282-.061m11.838 6.376c6.468 0 12.905 0 19.342.092c-14.095 11.38-27.732 23.309-42.071 34.384c7.505-11.533 15.224-22.943 22.729-34.476"></svg:path></svg:g>`,
})
export class DeviconSocketioIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
