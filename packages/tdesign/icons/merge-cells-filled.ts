import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMergeCellsFilledIcon],svg[tdesign-merge-cells-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2H2v20h9v-5h2v5h9V2h-9v5h-2zm6.182 8.232L15.415 12l1.767 1.768l-1.414 1.414L12.586 12l3.182-3.182zM8.33 8.818L11.512 12L8.33 15.182l-1.414-1.414L8.684 12l-1.768-1.767z"></svg:path>`,
})
export class TdesignMergeCellsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
