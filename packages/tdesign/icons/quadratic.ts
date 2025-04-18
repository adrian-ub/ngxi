import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignQuadraticIcon],svg[tdesign-quadratic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.253 3H23v2H12.747L7.882 21.418l-4.215-6.775H1v-2h3.778l2.451 3.94zM22 10v2.136a2 2 0 0 1-.726 1.542L19.07 15.5l2.204 1.822A2 2 0 0 1 22 18.864V21h-2v-2.136l-2.5-2.067l-2.5 2.067V21h-2v-2.136a2 2 0 0 1 .726-1.542L15.93 15.5l-2.204-1.822A2 2 0 0 1 13 12.136V10h2v2.136l2.5 2.067l2.5-2.067V10z"></svg:path>`,
})
export class TdesignQuadraticIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
