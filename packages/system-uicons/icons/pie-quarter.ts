import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPieQuarterIcon],svg[system-uicons-pie-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.519 2.747a8 8 0 1 0 9.705 9.845"></svg:path><svg:path d="M18.5 10.5a8 8 0 0 0-8-8v8z"></svg:path></svg:g>`,
})
export class SystemUiconsPieQuarterIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
