import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirNpmIcon],svg[iconoir-npm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M1 8h22v7H11v2H7.5v-2H1zm6.5 0v7m6-7v7"></svg:path><svg:path d="M18 11v4M5 11v4m6-4v1m9.5-1v4"></svg:path></svg:g>`,
})
export class IconoirNpmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
