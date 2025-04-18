import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSandGlassFilledIcon],svg[lsicon-sand-glass-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 2h1v4.207L5.793 8L4 9.793V14H3v1h10v-1h-1V9.793L10.207 8L12 6.207V2h1V1H3zm4 4h2V5H7zm-1 6h4v-1H6z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSandGlassFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
