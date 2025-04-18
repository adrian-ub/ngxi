import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLink1Icon],svg[tdesign-link-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.778 4.929a3.5 3.5 0 0 0-4.95 0L12.707 7.05l-1.415-1.414l2.122-2.121a5.5 5.5 0 0 1 7.778 7.778l-3.182 3.182a5.5 5.5 0 0 1-7.778 0l-1.533-1.533l1.415-1.414l1.532 1.533a3.5 3.5 0 0 0 4.95 0l3.182-3.182a3.5 3.5 0 0 0 0-4.95m-7.425 6.01a3.5 3.5 0 0 0-4.95 0l-3.182 3.182a3.5 3.5 0 0 0 4.95 4.95l2.122-2.121l1.414 1.414l-2.122 2.121a5.5 5.5 0 0 1-7.778-7.778L5.99 9.525a5.5 5.5 0 0 1 7.778 0l1.296 1.296l-1.414 1.414z"></svg:path>`,
})
export class TdesignLink1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
