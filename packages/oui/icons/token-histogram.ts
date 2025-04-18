import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenHistogramIcon],svg[oui-token-histogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h4v5h2V5.5h4V13H3.001v-1H3zm1 9h2V4H4zm3 0h2V9H7zm3 0h2V6.5h-2z"></svg:path>`,
})
export class OuiTokenHistogramIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
