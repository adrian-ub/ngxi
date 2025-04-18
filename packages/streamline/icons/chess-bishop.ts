import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineChessBishopIcon],svg[streamline-chess-bishop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.761 7.377c.433-.317.692-.807.692-1.505c0-1.97-2.454-3.095-2.454-3.095S4.546 3.902 4.546 5.872c0 .698.259 1.188.691 1.505c-.45 1.287-1.104 3.19-1.125 3.46h5.774c-.02-.27-.674-2.173-1.125-3.46"></svg:path><svg:path d="M5.861 1.639a1.139 1.139 0 1 0 2.277 0a1.139 1.139 0 0 0-2.277 0M7.389 5.47L8.732 4.1m-5.929 7.344a.89.89 0 0 1 .842-.607h6.71c.382 0 .721.244.842.607l.685 2.056H2.118z"></svg:path></svg:g>`,
})
export class StreamlineChessBishopIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
