import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFilterFilledIcon],svg[lsicon-filter-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.111.314L9.364 9.177V13.5a.5.5 0 0 1-.672.47l-2.728-1a.5.5 0 0 1-.328-.47V9.177L2.111 4.814A.5.5 0 0 1 2 4.5zm12 7v1h-4v-1zm-1 3h-3v-1h3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFilterFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
