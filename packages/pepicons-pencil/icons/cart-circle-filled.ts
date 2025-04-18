import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilCartCircleFilledIcon],svg[pepicons-pencil-cart-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilCartCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M6.712 5.5H5.5a.5.5 0 0 1 0-1h1.603a.5.5 0 0 1 .485.379l1.897 7.6a.5.5 0 0 1-.97.242z"></svg:path><svg:path fill-rule="evenodd" d="M18.495 10.5h-7.99q-.226 0-.447.05a2.02 2.02 0 0 0-1.508 2.418l.783 3.461A2.01 2.01 0 0 0 11.29 18h6.423a2.01 2.01 0 0 0 1.955-1.57l.783-3.462q.05-.221.05-.449a2.01 2.01 0 0 0-2.005-2.019m-8.212 1.025a1 1 0 0 1 .223-.025h7.989a1.013 1.013 0 0 1 .98 1.247l-.784 3.462a1.01 1.01 0 0 1-.98.791H11.29c-.468 0-.875-.328-.98-.791l-.783-3.462a1.02 1.02 0 0 1 .757-1.222" clip-rule="evenodd"></svg:path><svg:path d="M20 19.75a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0m-7 0a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilCartCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilCartCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
