import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqLighthouseIcon],svg[marketeq-lighthouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M31.25 14.583h-12.5v8.334h12.5zm0 8.334h-12.5L16.667 43.75h16.666z"></svg:path><svg:path stroke="#344054" d="M12.5 43.75h25m-4.167-29.167H16.667L25 6.25z"></svg:path></svg:g>`,
})
export class MarketeqLighthouseIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
