import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapBubbleIcon],svg[tdesign-map-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 1.842l6.074 3.544L22 2.5v15.574l-7 4.084l-6.074-3.544L2 21.5V5.926zM4 7.074V18.5l5.074-2.114L15 19.842l5-2.916V5.5l-5.074 2.114L9 4.158zM7.5 9.5a.25.25 0 1 0 0-.5a.25.25 0 0 0 0 .5m-1.75-.25a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M14 10.5a.25.25 0 1 0 0-.5a.25.25 0 0 0 0 .5m-1.75-.25a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M10 14a.25.25 0 1 0 0-.5a.25.25 0 0 0 0 .5m-1.75-.25a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M16.5 15a.25.25 0 1 0 0-.5a.25.25 0 0 0 0 .5m-1.75-.25a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0"></svg:path>`,
})
export class TdesignMapBubbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
