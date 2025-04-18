import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsVennDiagramOutlineIcon],svg[teenyicons-venn-diagram-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M2.5 9.5a5 5 0 1 1 10 0a5 5 0 0 1-10 0Z"></svg:path><svg:path d="M.5 5.5a5 5 0 1 1 10 0a5 5 0 0 1-10 0Z"></svg:path><svg:path d="M4.5 5.5a5 5 0 1 1 10 0a5 5 0 0 1-10 0Z"></svg:path></svg:g>`,
})
export class TeenyiconsVennDiagramOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
