import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsExpandIcon],svg[rivet-icons-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.586 3l-3 3L10 7.414l3-3V7h2V1H9v2zM4.414 13l3-3L6 8.586l-3 3V9H1v6h6v-2z"></svg:path>`,
})
export class RivetIconsExpandIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
