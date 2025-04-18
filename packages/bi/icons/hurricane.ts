import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biHurricaneIcon],svg[bi-hurricane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.999 2.6A5.5 5.5 0 0 1 15 7.5a.5.5 0 0 0 1 0a6.5 6.5 0 1 0-13 0a5 5 0 0 0 6.001 4.9A5.5 5.5 0 0 1 1 7.5a.5.5 0 0 0-1 0a6.5 6.5 0 1 0 13 0a5 5 0 0 0-6.001-4.9M10 7.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class BiHurricaneIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
