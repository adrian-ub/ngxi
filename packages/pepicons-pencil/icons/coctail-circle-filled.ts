import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilCoctailCircleFilledIcon],svg[pepicons-pencil-coctail-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilCoctailCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M9 11a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="m6.134 8.34l6.5 7a.5.5 0 0 0 .732 0l6.5-7a.5.5 0 0 0-.366-.84h-13a.5.5 0 0 0-.366.84m1.513.16h10.706L13 14.265z" clip-rule="evenodd"></svg:path><svg:path d="M12.5 14.875h1l.125.125v6l-.125.125h-1L12.375 21v-6z"></svg:path><svg:path d="M17.5 23h-9c0-1.475 2.05-2.5 4.5-2.5s4.5 1.025 4.5 2.5M15.879 4.567a.5.5 0 0 1 .242-.97l4 1a.5.5 0 0 1-.242.97z"></svg:path><svg:path d="M13.203 12.747a.5.5 0 0 1-.94-.343l3.093-8.493a.5.5 0 1 1 .94.342z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilCoctailCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilCoctailCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
