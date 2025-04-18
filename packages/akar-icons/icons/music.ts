import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsMusicIcon],svg[akar-icons-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 18V5.716a2 2 0 0 1 1.696-1.977l9-1.385A2 2 0 0 1 21 4.331V16"></svg:path><svg:path d="m8 9l13-2"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 18a3 3 0 1 1-6 0c0-1.657 1.343-2 3-2s3 .343 3 2m13-2a3 3 0 1 1-6 0c0-1.657 1.343-2 3-2s3 .343 3 2"></svg:path></svg:g>`,
})
export class AkarIconsMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
