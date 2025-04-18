import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPipelinesIcon],svg[carbon-pipelines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12h6c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2h-6c-1.103 0-2 .898-2 2v2h-9c-2.757 0-5 2.243-5 5H4c-1.103 0-2 .898-2 2v6c0 1.103.897 2 2 2h2c0 2.757 2.243 5 5 5h9v2c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2v-6c0-1.102-.897-2-2-2h-6c-1.103 0-2 .898-2 2v2h-9c-1.654 0-3-1.346-3-3h2c1.103 0 2-.897 2-2v-6c0-1.102-.897-2-2-2H8c0-1.654 1.346-3 3-3h9v2c0 1.103.897 2 2 2m0 10h6v6h-6l-.001-6zm-12-9v6H4l-.001-6zm12-9h6v6h-6l-.001-6z"></svg:path>`,
})
export class CarbonPipelinesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
