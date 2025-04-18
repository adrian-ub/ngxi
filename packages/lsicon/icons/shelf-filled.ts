import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconShelfFilledIcon],svg[lsicon-shelf-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h3v4.5H2zm4.5 0h3v4.5h-3zM11 2h3v4.5h-3zm3 6.5H2v-1h12zm-12 1h3V14H2zm4.5 0h3V14h-3zm4.5 0h3V14h-3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShelfFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
