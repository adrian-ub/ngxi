import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsCoinsIcon],svg[humbleicons-coins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.5 8l1-.5v4m9-2.125A5.502 5.502 0 0 1 15.5 20c-1.796 0-3.39-.86-4.395-2.192M14 9.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"></svg:path>`,
})
export class HumbleiconsCoinsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
