import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconInspectIcon],svg[codicon-inspect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m1 3l1-1h12l1 1v6h-1V3H2v8h5v1H2l-1-1zm14.707 9.707L9 6v9.414l2.707-2.707zM10 13V8.414l3.293 3.293h-2z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconInspectIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
