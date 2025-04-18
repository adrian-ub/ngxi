import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfacePageControllerLoading2ProgressLoadingLineLoadWaitWaitingIcon],svg[streamline-interface-page-controller-loading-2-progress-loading-line-load-wait-waiting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="5" height="4" x=".5" y="5" rx=".5"></svg:rect><svg:rect width="3" height="4" x="8" y="5" rx=".5"></svg:rect><svg:path d="M13.5 5v4"></svg:path></svg:g>`,
})
export class StreamlineInterfacePageControllerLoading2ProgressLoadingLineLoadWaitWaitingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
