import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBazosIcon],svg[arcticons-bazos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.169 18.439s-.657 6.923-.828 9.443c-.114 1.681 1.707 2.681 3.252 2.681c3.514 0 5.5-3.096 5.722-7.402c.454-8.815-4.955-12.96-12.307-12.96c-7.08 0-12.776 5.496-13.448 12.96C4.997 29.4 8.38 37.8 17.353 37.8c3.208 0 5.854-.41 7.878-1.783"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.541 25.361c-.203 2.319-2.23 4.201-4.554 4.201s-4.042-1.879-3.839-4.198l.24-2.728c.203-2.318 2.251-4.198 4.574-4.198s4.024 1.86 3.82 4.178M42.5 9.409s-5.75 6.535-5.75 14.59s5.75 14.592 5.75 14.592"></svg:path>`,
})
export class ArcticonsBazosIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
