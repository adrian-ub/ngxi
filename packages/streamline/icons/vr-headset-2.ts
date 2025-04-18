import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineVrHeadset2Icon],svg[streamline-vr-headset-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 6.992c0-1.021.831-1.849 1.857-1.849h9.286c1.025 0 1.857.828 1.857 1.85v3.663c0 1.203-1.138 2.096-2.327 1.884c-1.257-.223-2.824-.44-4.173-.44s-2.916.217-4.173.44C1.637 12.752.5 11.86.5 10.656zm4.179-1.849l.464-3.714h3.714l.464 3.714M4.214 7.929h5.572"></svg:path>`,
})
export class StreamlineVrHeadset2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
