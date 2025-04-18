import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqHammerDrillIcon],svg[marketeq-hammer-drill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 10.417H8.333M25 31.25v12.5zm8.333-20.833h8.334z"></svg:path><svg:path stroke="#306CFE" d="M31.25 22.917h-12.5a2.083 2.083 0 0 1-2.083-2.084v-12.5A2.083 2.083 0 0 1 18.75 6.25h12.5a2.083 2.083 0 0 1 2.083 2.083v12.5a2.083 2.083 0 0 1-2.083 2.084m-2.083 0h-8.334v6.25a2.083 2.083 0 0 0 2.084 2.083h4.166a2.083 2.083 0 0 0 2.084-2.083z"></svg:path></svg:g>`,
})
export class MarketeqHammerDrillIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
