import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCrossCircleIcon],svg[system-uicons-cross-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><svg:circle cx="8.5" cy="8.5" r="8"></svg:circle><svg:path d="m5.5 5.5l6 6m0-6l-6 6"></svg:path></svg:g>`,
})
export class SystemUiconsCrossCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
