import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAdd1Icon],svg[streamline-add-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5v13M.5 6.96h13"></svg:path>`,
})
export class StreamlineAdd1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
