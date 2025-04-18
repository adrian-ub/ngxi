import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7FunnelFillIcon],svg[f7-funnel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M45.956 7a4 4 0 0 1 3.149 6.467l-13.38 17.075a4 4 0 0 0-.851 2.467v11.223a4 4 0 0 1-5.314 3.778l-5.479-1.906a4 4 0 0 1-2.686-3.778v-9.293a4 4 0 0 0-.878-2.5L6.877 13.5A4 4 0 0 1 10 7z"></svg:path>`,
})
export class F7FunnelFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
