import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLaunchStudy1Icon],svg[carbon-launch-study-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="23" cy="25" r="1" fill="currentColor"></svg:circle><svg:path d="M26 22v6H6v-6h20m0-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z" fill="currentColor"></svg:path><svg:path d="M20.59 10.59L17 14.17V2h-2v12.17l-3.59-3.58L10 12l6 6l6-6l-1.41-1.41z" fill="currentColor"></svg:path><svg:path d="M8 24h12v2H8z" fill="currentColor"></svg:path>`,
})
export class CarbonLaunchStudy1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
