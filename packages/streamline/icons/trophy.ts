import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTrophyIcon],svg[streamline-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 9.5v4m-3.5 0h7m-7-13h-3v3a3 3 0 0 0 3 3zm7 0h3v3a3 3 0 0 1-3 3z"></svg:path><svg:path d="M3.5.5V6a3.5 3.5 0 1 0 7 0V.5z"></svg:path></svg:g>`,
})
export class StreamlineTrophyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
