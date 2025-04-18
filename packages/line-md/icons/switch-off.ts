import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdSwitchOffIcon],svg[line-md-switch-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7" cy="12" r="3" fill="currentColor" fill-opacity="0" opacity="0"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="opacity" begin="0.6s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:path fill="none" stroke="currentColor" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7h5c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5h-10c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path>`,
})
export class LineMdSwitchOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
