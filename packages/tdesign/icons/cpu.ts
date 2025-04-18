import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCpuIcon],svg[tdesign-cpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 .5V3h6V.5h2V3h4v4h2.5v2H21v6h2.5v2H21v4h-4v2.5h-2V21H9v2.5H7V21H3v-4H.5v-2H3V9H.5V7H3V3h4V.5zM5 5v14h14V5zm3 3h8v8H8zm2 2v4h4v-4z"></svg:path>`,
})
export class TdesignCpuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
