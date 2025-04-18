import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsHome2Icon],svg[proicons-home-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.71 18.65v-7.622a3 3 0 0 0-1.151-2.362l-6.326-4.951a2 2 0 0 0-2.466 0l-6.326 4.95a3 3 0 0 0-1.15 2.363v7.622c0 1.16.94 2.1 2.1 2.1h3.97v-7.965h5.278v7.965h3.97a2.1 2.1 0 0 0 2.1-2.1"></svg:path>`,
})
export class ProiconsHome2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
