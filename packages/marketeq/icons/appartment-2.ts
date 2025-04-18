import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqAppartment2Icon],svg[marketeq-appartment-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M14.583 22.917h8.334m0 20.833v-12.5h-8.334v12.5zm-8.334-29.167h8.334z"></svg:path><svg:path stroke="#306CFE" d="M31.25 43.75h-25V8.333A2.083 2.083 0 0 1 8.333 6.25h20.834a2.083 2.083 0 0 1 2.083 2.083zm0 0h12.5V18.167a2.084 2.084 0 0 0-1.417-2.084L31.25 12.5z"></svg:path></svg:g>`,
})
export class MarketeqAppartment2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
