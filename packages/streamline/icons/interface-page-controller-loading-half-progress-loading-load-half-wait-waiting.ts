import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfacePageControllerLoadingHalfProgressLoadingLoadHalfWaitWaitingIcon],svg[streamline-interface-page-controller-loading-half-progress-loading-load-half-wait-waiting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 1 6.21-8.41M13.5 7v.5"></svg:path><svg:path stroke-dasharray=".889 1.778" d="M13.11 9.23a6.51 6.51 0 0 1-2.79 3.36"></svg:path><svg:path d="m9.53 13l-.47.18"></svg:path></svg:g>`,
})
export class StreamlineInterfacePageControllerLoadingHalfProgressLoadingLoadHalfWaitWaitingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
