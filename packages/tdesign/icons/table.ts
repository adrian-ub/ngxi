import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTableIcon],svg[tdesign-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22h20V2H2zm2-2v-5h4v5zm6 0v-5h4v5zm6 0v-5h4v5zm4-7h-4V8h4zm0-7H4V4h16zM4 8h4v5H4zm6 5V8h4v5z"></svg:path>`,
})
export class TdesignTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
