import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiEuroIcon],svg[mynaui-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 10H7.12m0 0H4m3.12 0c.55-4.254 3.01-6 7.38-6c2.418 0 4.251.535 5.5 1.733M7.12 10Q7 10.92 7 12t.12 2M14 14H7.12m0 0H4m3.12 0c.55 4.254 3.01 6 7.38 6c2.418 0 4.251-.535 5.5-1.733"></svg:path>`,
})
export class MynauiEuroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
