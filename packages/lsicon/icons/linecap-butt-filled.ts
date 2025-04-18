import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconLinecapButtFilledIcon],svg[lsicon-linecap-butt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h12v4.573a1.5 1.5 0 0 1 0 2.814V14H2v-1h11V9.402a1.5 1.5 0 0 1-.927-.902H2v-1h10.058c.15-.442.5-.792.942-.942V3H2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLinecapButtFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
