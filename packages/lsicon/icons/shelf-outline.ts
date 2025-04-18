import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconShelfOutlineIcon],svg[lsicon-shelf-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 8h12m-9.5 5v-3h-2v3m2 0v.5h-2V13m2 0h-2M9 13v-3H7v3m2 0v.5H7V13m2 0H7m6.5 0v-3h-2v3m2 0v.5h-2V13m2 0h-2m-7-7.5v-3h-2v3m2 0V6h-2v-.5m2 0h-2m6.5 0v-3H7v3m2 0V6H7v-.5m2 0H7m6.5 0v-3h-2v3m2 0V6h-2v-.5m2 0h-2"></svg:path>`,
})
export class LsiconShelfOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
