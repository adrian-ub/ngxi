import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqPackageIcon],svg[marketeq-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 16.667h-12.5V31.25L25 29.167l6.25 2.083z"></svg:path><svg:path stroke="#306CFE" d="M43.75 16.667v25a2.083 2.083 0 0 1-2.083 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083v-25m0 0l9.813-9.813a2.08 2.08 0 0 1 1.458-.604h14.958c.547.002 1.07.22 1.459.604l9.812 9.813z"></svg:path></svg:g>`,
})
export class MarketeqPackageIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
