import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faHtml5Icon],svg[fa-html5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1130 469l16-175H262l47 534h612l-22 228l-197 53l-196-53l-13-140H318l22 278l362 100h4v-1l359-99l50-544H471l-15-181zM0 0h1408l-128 1438l-578 162l-574-162z"></svg:path>`,
})
export class FaHtml5Icon {
  readonly viewBox = input("0 0 1408 1600")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
