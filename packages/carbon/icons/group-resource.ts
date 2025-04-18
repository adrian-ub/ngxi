import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonGroupResourceIcon],svg[carbon-group-resource-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 24H10a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M10 10v12h12V10zM8 30H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4v2H4v24h4zm20 0h-4v-2h4V4h-4V2h4a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonGroupResourceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
