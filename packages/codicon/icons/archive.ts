import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconArchiveIcon],svg[codicon-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 1h-13l-.5.5v3l.5.5H2v8.5l.5.5h11l.5-.5V5h.5l.5-.5v-3zm-1 3H2V2h12v2zM3 13V5h10v8zm8-6H5v1h6z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconArchiveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
