import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqLeftSquare3Icon],svg[marketeq-left-square-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M20.833 25H31.25m-8.333-4.167L18.75 25l4.167 4.167"></svg:path><svg:path stroke="#306CFE" d="m23.513 6.866l-16.66 16.66a2.083 2.083 0 0 0 0 2.947l16.66 16.661a2.083 2.083 0 0 0 2.946 0l16.662-16.66a2.083 2.083 0 0 0 0-2.947L26.459 6.866a2.083 2.083 0 0 0-2.946 0"></svg:path></svg:g>`,
})
export class MarketeqLeftSquare3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
