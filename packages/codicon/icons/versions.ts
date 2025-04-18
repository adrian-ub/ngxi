import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconVersionsIcon],svg[codicon-versions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 3L7 4v8l1 1h6l1-1V4l-1-1zm6 9H8V4h6zM5 9V5h1V4H4.5l-.5.5v7l.5.5H6v-1H5zM2 8V6h1V5H1.5l-.5.5v5l.5.5H3v-1H2z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconVersionsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
