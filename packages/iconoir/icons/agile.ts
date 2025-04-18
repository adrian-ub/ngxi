import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirAgileIcon],svg[iconoir-agile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17.5 19H22m0 0l-2.5-2.5M22 19l-2.5 2.5M12 2L9.5 4.5L12 7"></svg:path><svg:path d="M10.5 4.5a7.5 7.5 0 0 1 0 15H2"></svg:path><svg:path d="M6.756 5.5A7.5 7.5 0 0 0 3 12c0 1.688.558 3.246 1.5 4.5"></svg:path></svg:g>`,
})
export class IconoirAgileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
