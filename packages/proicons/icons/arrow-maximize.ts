import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsArrowMaximizeIcon],svg[proicons-arrow-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 12.75v6c0 .414.168.79.44 1.06m7.06.44h-6a1.5 1.5 0 0 1-1.06-.44m16.06-8.56v-6c0-.414-.168-.79-.44-1.06m-7.06-.44h6c.414 0 .79.168 1.06.44M4.19 19.81l.56-.56l14.5-14.5l.56-.56"></svg:path>`,
})
export class ProiconsArrowMaximizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
