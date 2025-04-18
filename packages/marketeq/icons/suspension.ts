import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSuspensionIcon],svg[marketeq-suspension-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M25 43.75a4.167 4.167 0 1 1 0-8.334a4.167 4.167 0 0 1 0 8.334m0-8.333v-25zM27.083 6.25h-4.166v4.167h4.166z"></svg:path><svg:path stroke="#344054" d="m20.833 17.708l8.334-2.083m-8.334 8.333l8.334-2.083zm0 6.25l8.334-2.083z"></svg:path></svg:g>`,
})
export class MarketeqSuspensionIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
