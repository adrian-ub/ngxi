import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilCloudDownCircleFilledIcon],svg[pepicons-pencil-cloud-down-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilCloudDownCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M14 6h-1a4 4 0 0 0-3.874 3H9a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4 4 0 0 0 14 6m-4.099 4l.193-.75A3 3 0 0 1 13 7h1c1.405 0 2.614.975 2.924 2.325l.14.61l.61.141A3.001 3.001 0 0 1 17 16H9a3 3 0 1 1 0-6z" clip-rule="evenodd"></svg:path><svg:path d="M13 13a.5.5 0 0 1 1 0v7.5a.5.5 0 0 1-1 0z"></svg:path><svg:path d="M15.688 18.11a.5.5 0 0 1 .624.78l-2.5 2a.5.5 0 1 1-.624-.78z"></svg:path><svg:path d="M10.688 18.89a.5.5 0 0 1 .624-.78l2.5 2a.5.5 0 1 1-.624.78z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilCloudDownCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilCloudDownCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
