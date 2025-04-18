import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDeleteOutlineIcon],svg[lsicon-delete-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M9.5 7v4M6 2.5h4m-8 2h12m-1.5 0v9h-9v-9m3 2.5v4"></svg:path>`,
})
export class LsiconDeleteOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
