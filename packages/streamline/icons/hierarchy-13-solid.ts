import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHierarchy13SolidIcon],svg[streamline-hierarchy-13-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.5 0H13a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1h-.918l-.899 2.517A1 1 0 0 1 12 8v2.5a1 1 0 0 1-1 1H8.5a1 1 0 0 1-1-1V8.695L5.626 6.992A1 1 0 0 1 5.5 7H4.231l-.54 2.518a1 1 0 0 1 .809.982V13a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-2.5a1 1 0 0 1 1-1h1.162l.545-2.544A1 1 0 0 1 2 6V3.5a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1v2.26l1.507 1.37A1 1 0 0 1 8.5 7h1.096l.893-2.5a1 1 0 0 1-.989-1V1a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHierarchy13SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
