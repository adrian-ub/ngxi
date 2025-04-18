import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNavigationArrowOffIcon],svg[streamline-navigation-arrow-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.503.502l12.995 12.996m-8.93-8.93l7.296-3.087a.5.5 0 0 1 .655.655L9.433 9.432M8.5 11.636l-.577 1.365a.5.5 0 0 1-.908.029l-1.94-3.88a.5.5 0 0 0-.224-.225L.97 6.985a.5.5 0 0 1 .028-.908L2.364 5.5"></svg:path>`,
})
export class StreamlineNavigationArrowOffIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
