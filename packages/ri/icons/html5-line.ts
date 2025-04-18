import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHtml5LineIcon],svg[ri-html5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 18.178l-4.62-1.256l-.328-3.544h2.27l.158 1.844l2.52.667l2.52-.667l.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.217l-.624 6.778zM3 2h18l-1.623 18L12 22l-7.377-2zm2.188 2L6.49 18.434L12 19.928l5.51-1.494L18.812 4z"></svg:path>`,
})
export class RiHtml5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
