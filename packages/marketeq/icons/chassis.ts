import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqChassisIcon],svg[marketeq-chassis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 12.5v25m-8.333-25h16.666zm0 25h16.666z"></svg:path><svg:path stroke="#306CFE" d="M37.5 18.75a4.167 4.167 0 0 1-4.167-4.167v-4.166A4.167 4.167 0 0 1 37.5 6.25v0a4.167 4.167 0 0 1 4.167 4.167v4.166A4.167 4.167 0 0 1 37.5 18.75m-20.833-4.167v-4.166a4.167 4.167 0 1 0-8.334 0v4.166a4.167 4.167 0 1 0 8.334 0m25 25v-4.166a4.167 4.167 0 1 0-8.334 0v4.166a4.167 4.167 0 1 0 8.334 0m-25 0v-4.166a4.167 4.167 0 1 0-8.334 0v4.166a4.167 4.167 0 1 0 8.334 0"></svg:path></svg:g>`,
})
export class MarketeqChassisIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
