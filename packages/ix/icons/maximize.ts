import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMaximizeIcon],svg[ix-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v149.333h-42.667v-76.23L302.805 239.374l-30.17-30.17l102.796-102.538h-76.764V64zM209.516 273.224l30.17 30.17l-102.684 101.939h76.331V448H64V298.667h42.667l-.001 76.661z"></svg:path>`,
})
export class IxMaximizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
