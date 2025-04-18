import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDrawers3Icon],svg[marketeq-drawers-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 20.833V25m-16.666 0v-4.167z"></svg:path><svg:path stroke="#306CFE" d="M43.75 6.25H6.25m4.167 37.5h29.166a2.083 2.083 0 0 0 2.084-2.083V6.25H8.333v35.417a2.083 2.083 0 0 0 2.084 2.083m0 0H25V6.25H8.333v35.417a2.083 2.083 0 0 0 2.084 2.083"></svg:path></svg:g>`,
})
export class MarketeqDrawers3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
