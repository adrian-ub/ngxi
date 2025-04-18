import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsArrowMinimizeIcon],svg[proicons-arrow-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.75 21.25l6.5-6.5l.56-.56m.44 7.06v-6c0-.414-.168-.79-.44-1.06m-7.06-.44h6c.414 0 .79.168 1.06.44m3.94-11.44v6c0 .414.168.79.44 1.06m7.06.44h-6a1.5 1.5 0 0 1-1.06-.44m7.06-7.06l-6.5 6.5l-.56.56"></svg:path>`,
})
export class ProiconsArrowMinimizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
