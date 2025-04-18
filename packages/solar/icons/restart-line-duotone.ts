import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRestartLineDuotoneIcon],svg[solar-restart-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" clip-path="url(#solarRestartLineDuotone0)"><svg:path d="M19.729 10.929a8 8 0 1 1-2.072-3.585l.707.706" opacity=".5"></svg:path><svg:path d="M14.121 8.05h4.243V3.808"></svg:path></svg:g><svg:defs><svg:clippath id="solarRestartLineDuotone0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SolarRestartLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
