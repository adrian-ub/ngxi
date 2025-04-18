import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfacePageControllerLoading1ProgressLoadingLoadWaitWaitingIcon],svg[streamline-interface-page-controller-loading-1-progress-loading-load-wait-waiting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .88v2.5m-5 0l1.84 1.69M1 8.88l2.42-.9m.97 5.14l1.11-2.24m6.5-7.5l-1.84 1.69M13 8.88l-2.42-.9m-.97 5.14L8.5 10.88"></svg:path>`,
})
export class StreamlineInterfacePageControllerLoading1ProgressLoadingLoadWaitWaitingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
