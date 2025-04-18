import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconTextOutlineIcon],svg[lsicon-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M3 3.5h5m5 0H8m0 0V12m-2 .5h4M12.5 4v1m-9-1v1"></svg:path>`,
})
export class LsiconTextOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
