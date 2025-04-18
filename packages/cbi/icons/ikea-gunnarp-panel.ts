import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiIkeaGunnarpPanelIcon],svg[cbi-ikea-gunnarp-panel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.707 9.777V8.313H2.428v1.334L2 9.644v.834l2.052 5.209h16.392L22 10.433v-.654Zm-2.368 5.481H5.044S3.714 11 3.623 10.929h16.889z"></svg:path>`,
})
export class CbiIkeaGunnarpPanelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
