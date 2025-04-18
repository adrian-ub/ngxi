import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiVectorIcon],svg[oui-vector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 11V5H11V3.5H5V5H3.5v6H5v1.5h6V11zm1 0H15v4h-4v-1.5H5V15H1v-4h1.5V5H1V1h4v1.5h6V1h4v4h-1.5zM4 4V2H2v2zm8 0h2V2h-2zM2 14h2v-2H2zm10 0h2v-2h-2z"></svg:path>`,
})
export class OuiVectorIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
