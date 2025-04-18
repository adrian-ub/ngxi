import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBitbuyIcon],svg[arcticons-bitbuy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.464 17.036C11.464 10.112 17.076 4.5 24 4.5s12.536 5.612 12.536 12.536s-5.613 12.536-12.534 12.536a5.571 5.571 0 0 1 0-11.143a12.535 12.535 0 1 1-12.537 12.536z"></svg:path>`,
})
export class ArcticonsBitbuyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
