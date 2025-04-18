import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTrademarkRegisteredThinIcon],svg[ph-trademark-registered-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m17.12-81.53A28 28 0 0 0 136 84h-32a4 4 0 0 0-4 4v80a4 4 0 0 0 8 0v-28h28.52l20.15 30.23a4 4 0 0 0 6.66-4.44ZM108 92h28a20 20 0 0 1 0 40h-28Z"></svg:path>`,
})
export class PhTrademarkRegisteredThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
