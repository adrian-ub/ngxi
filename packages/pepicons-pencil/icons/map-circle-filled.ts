import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMapCircleFilledIcon],svg[pepicons-pencil-map-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilMapCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M13 11.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M8.5 9.286c0 2.673 2.653 7.214 4.5 7.214c1.848 0 4.5-4.541 4.5-7.214C17.5 6.65 15.493 4.5 13 4.5S8.5 6.65 8.5 9.286m8 0c0 2.193-2.348 6.214-3.5 6.214c-1.151 0-3.5-4.02-3.5-6.214C9.5 7.187 11.075 5.5 13 5.5s3.5 1.687 3.5 3.786" clip-rule="evenodd"></svg:path><svg:path d="M16.435 12.14a.5.5 0 0 1 .369-.929a3 3 0 0 1 1.74 1.84l1.334 4A3 3 0 0 1 17.03 21H8.97a3 3 0 0 1-2.846-3.949l1.333-4a3 3 0 0 1 1.783-1.857a.5.5 0 1 1 .355.935a2 2 0 0 0-1.19 1.239l-1.333 4A2 2 0 0 0 8.97 20h8.062a2 2 0 0 0 1.897-2.633l-1.332-4a2 2 0 0 0-1.16-1.226"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilMapCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilMapCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
