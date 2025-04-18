import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsBars3BottomLeftIcon],svg[heroicons-bars-3-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"></svg:path>`,
})
export class HeroiconsBars3BottomLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
