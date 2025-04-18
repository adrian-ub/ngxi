import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsColumUpLightIcon],svg[lets-icons-colum-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M21 20H3m7-4v-6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6m12 0V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10"></svg:path>`,
})
export class LetsIconsColumUpLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
