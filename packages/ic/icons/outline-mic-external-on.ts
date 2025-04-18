import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineMicExternalOnIcon],svg[ic-outline-mic-external-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.22 7c.48-.53.78-1.23.78-2c0-1.66-1.34-3-3-3S4 3.34 4 5c0 .77.3 1.47.78 2z"></svg:path><svg:path fill="currentColor" d="M16 2c-2.21 0-4 1.79-4 4v12c0 1.1-.9 2-2 2s-2-.9-2-2h1l1-10H4l1 10h1c0 2.21 1.79 4 4 4s4-1.79 4-4V6c0-1.1.9-2 2-2s2 .9 2 2v16h2V6c0-2.21-1.79-4-4-4M7.19 16h-.38l-.6-6h1.58z"></svg:path>`,
})
export class IcOutlineMicExternalOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
