import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCarrotIcon],svg[tabler-carrot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 21s9.834-3.489 12.684-6.34a4.487 4.487 0 0 0 0-6.344a4.483 4.483 0 0 0-6.342 0c-2.86 2.861-6.347 12.689-6.347 12.689zm6-8l-1.5-1.5M16 14l-2-2m8-4s-1.14-2-3-2c-1.406 0-3 2-3 2s1.14 2 3 2s3-2 3-2"></svg:path><svg:path d="M16 2s-2 1.14-2 3s2 3 2 3s2-1.577 2-3c0-1.86-2-3-2-3"></svg:path></svg:g>`,
})
export class TablerCarrotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
