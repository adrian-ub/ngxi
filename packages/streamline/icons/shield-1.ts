import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShield1Icon],svg[streamline-shield-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.354 13.384a1 1 0 0 1-.714 0v0A9.49 9.49 0 0 1 .55 4.517V1.542A.99.99 0 0 1 1.542.55h10.91a.99.99 0 0 1 .991.992v2.975a9.49 9.49 0 0 1-6.09 8.867v0Z"></svg:path>`,
})
export class StreamlineShield1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
