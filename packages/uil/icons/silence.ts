import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilSilenceIcon],svg[uil-silence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11a1 1 0 1 0-1-1a1 1 0 0 0 1 1m6 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1m1 3a1 1 0 0 0-2 0h-1a1 1 0 0 0-2 0h-1a1 1 0 0 0-2 0a1 1 0 0 0 0 2a1 1 0 0 0 2 0h1a1 1 0 0 0 2 0h1a1 1 0 0 0 2 0a1 1 0 0 0 0-2M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path>`,
})
export class UilSilenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
