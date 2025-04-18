import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsGraphIncreaseIcon],svg[system-uicons-graph-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.5 3.5v11a2 2 0 0 0 2 2h11"></svg:path><svg:path d="m6.5 12.5l3-3l2 2l5-5"></svg:path><svg:path d="M16.5 9.5v-3h-3"></svg:path></svg:g>`,
})
export class SystemUiconsGraphIncreaseIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
