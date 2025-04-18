import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosStrutsIcon],svg[logos-struts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#202A5A" d="M241.026 73.902L130.416 9.66L9.66 77.283v135.245l120.755 67.623l115.925-67.623V71.487z"></svg:path><svg:path fill="#2C448A" d="m9.66 77.283l120.755 67.623L246.34 77.283L130.415 9.66z"></svg:path><svg:path fill="#283A79" d="m246.34 71.487l-38.642 20.287l-.483 8.694l-76.8 44.438V280.15l115.925-67.623z"></svg:path><svg:path fill="#202A5A" d="M9.66 77.283v135.245l120.755 67.623V144.906z"></svg:path><svg:path fill="#3558A7" d="M0 212.528v-43.471l130.415 77.283v43.471zM0 77.283v24.151l130.415 77.283v-24.151z"></svg:path><svg:path fill="#416FB5" d="M256 212.528v-24.15L150.219 142.49l-19.804 12.075v23.668l64.242 28.498l-64.242 39.608v43.471z"></svg:path><svg:path fill="#477FC1" d="m194.657 206.732l-7.729-2.898l-56.513 32.845L9.66 169.057v-5.797L0 169.057l130.415 77.283zM56.996 86.943l73.42-43.471l77.282 48.302l38.642-20.287L130.415 0L0 77.283l130.415 77.283l19.804-12.075z"></svg:path><svg:path fill="#202A5A" d="m207.215 100.468l.483-8.694l-77.283-48.302l-73.419 43.471l8.212 4.83l65.207-38.64z"></svg:path>`,
})
export class LogosStrutsIcon {
  readonly viewBox = input("0 0 256 290")
  readonly width = input("0.89em")
  readonly height = input("1em")
}
