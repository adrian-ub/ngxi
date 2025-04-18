import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilGolfBallIcon],svg[uil-golf-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 9a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-3a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-2-4a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m5-12a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path>`,
})
export class UilGolfBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
