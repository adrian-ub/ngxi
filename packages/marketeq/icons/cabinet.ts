import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCabinetIcon],svg[marketeq-cabinet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M37.5 39.583v4.167M22.917 14.583h4.166zm0 16.667h4.166zM12.5 39.583v4.167z"></svg:path><svg:path stroke="#306CFE" d="M10.417 22.917h29.166V8.333A2.083 2.083 0 0 0 37.5 6.25h-25a2.083 2.083 0 0 0-2.083 2.083zM12.5 39.583h25a2.083 2.083 0 0 0 2.083-2.083V22.917H10.417V37.5a2.083 2.083 0 0 0 2.083 2.083"></svg:path></svg:g>`,
})
export class MarketeqCabinetIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
