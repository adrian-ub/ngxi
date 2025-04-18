import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirRepositoryIcon],svg[iconoir-repository-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"></svg:path><svg:path stroke-linejoin="round" d="M15 17v5l2.5-1.6L20 22v-5"></svg:path><svg:path d="M6 17h14"></svg:path><svg:path stroke-linejoin="round" d="M6 17a2 2 0 1 0 0 4h5.5"></svg:path></svg:g>`,
})
export class IconoirRepositoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
