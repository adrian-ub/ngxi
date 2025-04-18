import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsInspireIcon],svg[simple-icons-inspire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v24h24V0zm3.873 3.688a1.874 1.874 0 1 1 .003 3.747a1.874 1.874 0 0 1-.003-3.747m4.49.507h3.532l6.734 10.813h.045V4.195H22v16.118h-3.547L11.736 9.522h-.047v10.79H8.364zM2.24 8.982s.013.004 3.389 0v11.276H2.24z"></svg:path>`,
})
export class SimpleIconsInspireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
