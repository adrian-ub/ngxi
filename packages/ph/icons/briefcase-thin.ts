import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseThinIcon],svg[ph-briefcase-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 112a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8h-32a4 4 0 0 1-4-4m120-40v128a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V72a12 12 0 0 1 12-12h44V48a20 20 0 0 1 20-20h48a20 20 0 0 1 20 20v12h44a12 12 0 0 1 12 12M92 60h72V48a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12ZM36 72v44a188 188 0 0 0 92 24a188 188 0 0 0 92-24V72a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4m184 128v-74.9a196.06 196.06 0 0 1-92 22.9a196 196 0 0 1-92-22.9V200a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4"></svg:path>`,
})
export class PhBriefcaseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
