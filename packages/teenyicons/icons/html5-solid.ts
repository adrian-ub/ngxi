import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHtml5SolidIcon],svg[teenyicons-html5-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.132.161A.5.5 0 0 1 .5 0h14a.5.5 0 0 1 .498.542l-1 12a.5.5 0 0 1-.34.432l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1-.34-.433l-1-12a.5.5 0 0 1 .13-.38M11 3H4v4h6v2.14l-2.5.833L5 9.14V8H4v1.86l3.5 1.167L11 9.86V6H5V4h6z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsHtml5SolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
