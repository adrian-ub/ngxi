import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRowsPlusTopLightIcon],svg[ph-rows-plus-top-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 162H48a14 14 0 0 0-14 14v24a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-24a14 14 0 0 0-14-14m2 38a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-24a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-2-110H48a14 14 0 0 0-14 14v24a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-24a14 14 0 0 0-14-14m2 38a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-24a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM98 40a6 6 0 0 1 6-6h18V16a6 6 0 0 1 12 0v18h18a6 6 0 0 1 0 12h-18v18a6 6 0 0 1-12 0V46h-18a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhRowsPlusTopLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
