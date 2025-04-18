import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceSignalSquareHeartLineStatsBeatSquareGraphIcon],svg[streamline-interface-signal-square-heart-line-stats-beat-square-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="3"></svg:rect><svg:path d="M2.5 7.02h2L6 4.51l1.5 5.5l2-2.99h2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceSignalSquareHeartLineStatsBeatSquareGraphIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
