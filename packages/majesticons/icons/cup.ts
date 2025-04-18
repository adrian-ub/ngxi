import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsCupIcon],svg[majesticons-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 5h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 5H4v7a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4zm0 0h2v0a2 2 0 0 1 2 2v4M4 19h14"></svg:path></svg:g>`,
})
export class MajesticonsCupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
