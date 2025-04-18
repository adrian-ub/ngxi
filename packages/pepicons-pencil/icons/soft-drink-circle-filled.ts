import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilSoftDrinkCircleFilledIcon],svg[pepicons-pencil-soft-drink-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilSoftDrinkCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M16.411 7.5H9.589a2 2 0 0 0-1.985 2.242l1.22 10A2 2 0 0 0 10.81 21.5h4.385a2 2 0 0 0 1.985-1.758l1.217-10q.015-.12.015-.242a2 2 0 0 0-2-2M9.468 8.507A1 1 0 0 1 9.59 8.5h6.822a1 1 0 0 1 .993 1.12l-1.218 10a1 1 0 0 1-.992.88H10.81a1 1 0 0 1-.992-.879l-1.22-10a1 1 0 0 1 .871-1.114" clip-rule="evenodd"></svg:path><svg:path d="M11.978 17.647a.5.5 0 1 1-.956-.294l4-13a.5.5 0 1 1 .956.294z"></svg:path><svg:path d="M8.5 13a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1zm6.879-8.015a.5.5 0 0 1 .242-.97l4 1a.5.5 0 0 1-.242.97z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilSoftDrinkCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilSoftDrinkCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
