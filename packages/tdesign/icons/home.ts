import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHomeIcon],svg[tdesign-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.198l10 8.334V22H2V9.532zM10 20h4v-5h-4zm6 0h4v-9.532l-8-6.666l-8 6.666V20h4v-7h8z"></svg:path>`,
})
export class TdesignHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
