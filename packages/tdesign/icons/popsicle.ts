import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPopsicleIcon],svg[tdesign-popsicle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.151 2.95a7 7 0 0 1 9.9 9.9l-8.84 8.839l-2.828-2.829l-3.182 3.182a3 3 0 1 1-4.242-4.243l3.182-3.182l-2.829-2.828zm1.06 15.91l7.042-7.042a4.3 4.3 0 0 0-.431-.997c-.451-.757-1.287-1.619-2.915-1.94c-2.261-.447-3.547-1.706-4.245-2.879a6 6 0 0 1-.257-.477l-6.264 6.264zm.746-14.849c.079.265.21.61.423.968c.451.757 1.287 1.618 2.915 1.94c2.261.446 3.546 1.706 4.245 2.878q.056.095.107.188a5.002 5.002 0 0 0-7.69-5.974m-6.402 12.02l-3.182 3.183a1 1 0 1 0 1.414 1.414l3.182-3.182z"></svg:path>`,
})
export class TdesignPopsicleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
