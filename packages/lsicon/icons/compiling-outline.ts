import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCompilingOutlineIcon],svg[lsicon-compiling-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M7 9.5h1m2-3L11.5 8L10 9.5m-4-3L4.5 8L6 9.5m1-3h2M7 8h2m-6.5 5.5h11v-11h-11z"></svg:path>`,
})
export class LsiconCompilingOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
