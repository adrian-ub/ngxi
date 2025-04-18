import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDirectionRtlStroke12Icon],svg[garden-direction-rtl-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M2.5 11.5L.9 9.9c-.2-.2-.2-.5 0-.7l1.6-1.6m6-.1V1c0-.3-.2-.5-.5-.5H6.5v7M6 .5c-1.1 0-2 .9-2 2s.9 2 2 2m-4.5 5h10"></svg:path>`,
})
export class GardenDirectionRtlStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
