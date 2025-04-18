import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMobileFilledIcon],svg[lsicon-mobile-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5zm3 12h3v-1h-3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMobileFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
