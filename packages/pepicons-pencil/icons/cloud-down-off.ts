import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilCloudDownOffIcon],svg[pepicons-pencil-cloud-down-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11 3h-1a4 4 0 0 0-3.874 3H6a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4 4 0 0 0 11 3M6.901 7l.193-.75A3 3 0 0 1 10 4h1c1.405 0 2.614.975 2.924 2.325l.14.61l.61.141A3.001 3.001 0 0 1 14 13H6a3 3 0 1 1 0-6z" clip-rule="evenodd"></svg:path><svg:path d="M10 10a.5.5 0 0 1 1 0v7.5a.5.5 0 0 1-1 0z"></svg:path><svg:path d="M12.688 15.11a.5.5 0 0 1 .624.78l-2.5 2a.5.5 0 1 1-.624-.78z"></svg:path><svg:path d="M7.688 15.89a.5.5 0 0 1 .624-.78l2.5 2a.5.5 0 1 1-.624.78zM1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilCloudDownOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
