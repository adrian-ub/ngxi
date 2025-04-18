import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHierarchy2SolidIcon],svg[streamline-hierarchy-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5.5A1.5 1.5 0 0 0 5 2v1a1.5 1.5 0 0 0 1.25 1.48v1.77H3A1.75 1.75 0 0 0 1.25 8v1.52A1.5 1.5 0 0 0 0 11v1a1.5 1.5 0 0 0 1.5 1.5h1A1.5 1.5 0 0 0 4 12v-1a1.5 1.5 0 0 0-1.25-1.48V8A.25.25 0 0 1 3 7.75h3.25v1.77A1.5 1.5 0 0 0 5 11v1a1.5 1.5 0 0 0 1.5 1.5h1A1.5 1.5 0 0 0 9 12v-1a1.5 1.5 0 0 0-1.25-1.48V7.75H11a.25.25 0 0 1 .25.25v1.52A1.5 1.5 0 0 0 10 11v1a1.5 1.5 0 0 0 1.5 1.5h1A1.5 1.5 0 0 0 14 12v-1a1.5 1.5 0 0 0-1.25-1.48V8A1.75 1.75 0 0 0 11 6.25H7.75V4.48A1.5 1.5 0 0 0 9 3V2A1.5 1.5 0 0 0 7.5.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHierarchy2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
