import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsVercelFillIcon],svg[akar-icons-vercel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l12 21H0z"></svg:path>`,
})
export class AkarIconsVercelFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
