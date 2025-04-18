import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfacePageControllerLoading3ProgressLoadingDotLoadWaitWaitingIcon],svg[streamline-interface-page-controller-loading-3-progress-loading-dot-load-wait-waiting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="1.5"></svg:circle><svg:circle cx="12.25" cy="7" r="1.25"></svg:circle><svg:circle cx="1.75" cy="7" r="1.25"></svg:circle></svg:g>`,
})
export class StreamlineInterfacePageControllerLoading3ProgressLoadingDotLoadWaitWaitingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
