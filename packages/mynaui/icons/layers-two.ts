import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLayersTwoIcon],svg[mynaui-layers-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 14l-9 4l-9-4m18-4l-9 4l-9-4l9-4z"></svg:path>`,
})
export class MynauiLayersTwoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
