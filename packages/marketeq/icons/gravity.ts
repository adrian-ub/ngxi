import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqGravityIcon],svg[marketeq-gravity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 8.333v12.5M25 6.25v12.5zm8.333 2.083v12.5z"></svg:path><svg:path stroke="#306CFE" d="M25 43.75a8.333 8.333 0 1 0 0-16.667a8.333 8.333 0 0 0 0 16.667"></svg:path></svg:g>`,
})
export class MarketeqGravityIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
