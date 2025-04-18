import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsH1Icon],svg[heroicons-h1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.243 4.493v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501m4.501-8.627l2.25-1.5v10.126m0 0h-2.25m2.25 0h2.25"></svg:path>`,
})
export class HeroiconsH1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
