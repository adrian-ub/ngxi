import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biInfinityIcon],svg[bi-infinity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.68 5.792L7.345 7.75L5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978L6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865l.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015zm.656.772l1.663-1.958a2.75 2.75 0 1 1 0 3.916z"></svg:path>`,
})
export class BiInfinityIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
