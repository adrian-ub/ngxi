import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconGoToEditingSessionIcon],svg[codicon-go-to-editing-session-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 1H3L2 2v12l1 1h9l1-1V6.817h-1V14H3V2h5z"></svg:path><svg:path d="M8 4H7v2H5v1h2v2h1V7h2V6H8zm-3 7h5v1H5zM13.87.483l.502.502V4.52h-1.004V2.187l-3.14 3.14l-.706-.708l3.146-3.146h-2.333v-.99z"></svg:path></svg:g>`,
})
export class CodiconGoToEditingSessionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
