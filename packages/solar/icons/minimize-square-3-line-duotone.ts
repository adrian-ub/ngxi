import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMinimizeSquare3LineDuotoneIcon],svg[solar-minimize-square-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M13 22c4.055-.008 6.178-.107 7.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.071 2 16.714 2 12 2S4.929 2 3.464 3.464C2.107 4.822 2.008 6.944 2 11" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m17 7l-5 5m0 0h3.75M12 12V8.25"></svg:path><svg:path d="M2 18c0-1.886 0-2.828.586-3.414S4.114 14 6 14s2.828 0 3.414.586S10 16.114 10 18s0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18Z"></svg:path></svg:g>`,
})
export class SolarMinimizeSquare3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
