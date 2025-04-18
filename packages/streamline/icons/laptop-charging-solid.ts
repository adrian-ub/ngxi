import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLaptopChargingSolidIcon],svg[streamline-laptop-charging-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.082 1.166a.75.75 0 1 0-1.248-.832l-1.833 2.75a.75.75 0 0 0 .624 1.166h1.348L9.917 5.834a.75.75 0 1 0 1.248.832L13 3.916a.75.75 0 0 0-.624-1.166h-1.349zM6.996 3.042a.75.75 0 1 1 0 1.5H3.7a.25.25 0 0 0-.25.25V8.75h7.095V8.5a.75.75 0 0 1 1.5 0v.894l1.654 2.206c.741.99.035 2.4-1.2 2.4H1.502c-1.235 0-1.941-1.41-1.2-2.4L1.95 9.404V4.792c0-.966.784-1.75 1.75-1.75z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineLaptopChargingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
