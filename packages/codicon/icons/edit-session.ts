import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconEditSessionIcon],svg[codicon-edit-session-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 14V6.5h1V14l-1 1H3l-1-1V2l1-1h5v1H3v12z"></svg:path><svg:path d="M7 4h1v2h2v1H8v2H7V7H5V6h2zm3 7H5v1h5zM13.887.597V2.29h-1.693v-.564h.555a1.7 1.7 0 0 0-.516-.344a1.5 1.5 0 0 0-.604-.124q-.233 0-.445.066a1.8 1.8 0 0 0-.405.186a1.54 1.54 0 0 0-.591.66L9.5 1.846q.15-.313.37-.556q.22-.242.503-.423A2.3 2.3 0 0 1 11.629.5q.48 0 .922.19q.441.19.771.533V.597zM9.5 5.137V3.444h1.693v.564h-.556q.23.22.516.344t.604.124q.234 0 .446-.066q.21-.066.405-.185a1.54 1.54 0 0 0 .591-.662l.688.326a2.3 2.3 0 0 1-.37.556a2.5 2.5 0 0 1-.503.423a2.3 2.3 0 0 1-1.257.366q-.48 0-.921-.19a2.3 2.3 0 0 1-.772-.533v.626z"></svg:path></svg:g>`,
})
export class CodiconEditSessionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
