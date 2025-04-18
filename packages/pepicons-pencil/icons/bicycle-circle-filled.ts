import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilBicycleCircleFilledIcon],svg[pepicons-pencil-bicycle-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilBicycleCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M18.5 21.5a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-7a3 3 0 1 1 0 6a3 3 0 0 1 0-6m-11 7a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-7a3 3 0 1 1 0 6a3 3 0 0 1 0-6" clip-rule="evenodd"></svg:path><svg:path d="M8 8a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="m13.475 17.343l-.035-.104l3.984-6.355A.5.5 0 0 0 17 10.12h-5.91l-.917-2.776a.5.5 0 1 0-.95.314l1.072 3.245l-3.24 6.371A.5.5 0 0 0 7.5 18H13a.5.5 0 0 0 .475-.657M8.315 17h3.993l-1.572-4.76zm3.104-5.881l1.614 4.887l3.063-4.887z" clip-rule="evenodd"></svg:path><svg:path d="M16.544 5.999a.5.5 0 1 1-.086-.996C20.113 4.687 22 5.064 22 6.5c0 1.265-.908 1.946-2.483 2a.5.5 0 1 1-.034-1C20.575 7.463 21 7.144 21 6.5c0-.474-1.445-.763-4.457-.502"></svg:path><svg:path d="m16.993 5.418l2 12c.11.657-.877.822-.986.164l-2-12c-.11-.657.877-.822.986-.164"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilBicycleCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilBicycleCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
