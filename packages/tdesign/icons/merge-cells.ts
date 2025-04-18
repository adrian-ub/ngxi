import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMergeCellsIcon],svg[tdesign-merge-cells-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h7v-4h2v4h7V4h-7v4h-2V4zm13.182 6.232L15.414 12l1.768 1.768l-1.414 1.414L12.586 12l3.182-3.182zM8.33 8.818L11.512 12L8.33 15.182l-1.414-1.414L8.683 12l-1.767-1.768z"></svg:path>`,
})
export class TdesignMergeCellsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
