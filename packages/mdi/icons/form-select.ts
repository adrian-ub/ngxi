import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormSelectIcon],svg[mdi-form-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5h3l-1.5 2zM5 2h14a2 2 0 0 1 2 2v16c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2m0 2v4h14V4zm0 16h14V10H5zm2-8h10v2H7zm0 4h10v2H7z"></svg:path>`,
})
export class MdiFormSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
