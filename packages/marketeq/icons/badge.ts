import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBadgeIcon],svg[marketeq-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m23.708 27.917l-2.875.395l2.084 1.855l-.5 2.645L25 31.563l2.583 1.25l-.5-2.645l2.084-1.855l-2.875-.395L25 25.52z"></svg:path><svg:path stroke="#306CFE" d="M25 41.667a12.5 12.5 0 1 1 0-24.999a12.5 12.5 0 0 1 0 24.999m0-25a12.5 12.5 0 0 1 6.25 1.687V6.25h-12.5v12.104A12.5 12.5 0 0 1 25 16.667"></svg:path></svg:g>`,
})
export class MarketeqBadgeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
