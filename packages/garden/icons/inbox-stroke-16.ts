import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenInboxStroke16Icon],svg[garden-inbox-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="13" height="15" x="1.5" y=".5" rx=".5" ry=".5"></svg:rect><svg:path stroke-linecap="round" d="M1.5 10.5h3V12a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-1.5h3m-10-7h7m-7 2h7m-7 2h7"></svg:path></svg:g>`,
})
export class GardenInboxStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
