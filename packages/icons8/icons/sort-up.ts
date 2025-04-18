import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8SortUpIcon],svg[icons8-sort-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 8.594l-.72.687l-10 10L3.595 21h24.811l-1.687-1.72l-10-10l-.72-.686zm0 2.844L23.563 19H8.438L16 11.437z"></svg:path>`,
})
export class Icons8SortUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
