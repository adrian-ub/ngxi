import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCopyOneOutlineIcon],svg[lsicon-copy-one-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M12 10.5h1.5v-8h-8V4m-3 9.5h8v-8h-8z"></svg:path>`,
})
export class LsiconCopyOneOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
