import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineServingDomeSolidIcon],svg[streamline-serving-dome-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 .103a.75.75 0 0 1 .75.75v1.04A7 7 0 0 1 14 8.854a1.5 1.5 0 0 1-1.5 1.5h-11a1.5 1.5 0 0 1-1.5-1.5a7 7 0 0 1 6.25-6.96V.854A.75.75 0 0 1 7 .103M.78 11.75a.75.75 0 0 0 0 1.5h12.44a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineServingDomeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
