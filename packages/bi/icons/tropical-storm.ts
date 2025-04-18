import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biTropicalStormIcon],svg[bi-tropical-storm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 9.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path d="M9.5 2c-.9 0-1.75.216-2.501.6A5 5 0 0 1 13 7.5a6.5 6.5 0 1 1-13 0a.5.5 0 0 1 1 0a5.5 5.5 0 0 0 8.001 4.9A5 5 0 0 1 3 7.5a6.5 6.5 0 0 1 13 0a.5.5 0 0 1-1 0A5.5 5.5 0 0 0 9.5 2M8 3.5a4 4 0 1 0 0 8a4 4 0 0 0 0-8"></svg:path></svg:g>`,
})
export class BiTropicalStormIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
