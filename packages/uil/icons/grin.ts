import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilGrinIcon],svg[uil-grin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11a1 1 0 1 0-1-1a1 1 0 0 0 1 1m3-9a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m3-7H9a1 1 0 0 0-1 1a4 4 0 0 0 8 0a1 1 0 0 0-1-1m-3 3a2 2 0 0 1-1.73-1h3.46A2 2 0 0 1 12 16m3-7a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path>`,
})
export class UilGrinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
