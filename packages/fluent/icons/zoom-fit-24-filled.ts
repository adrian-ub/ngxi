import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentZoomFit24FilledIcon],svg[fluent-zoom-fit-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.52 2.709a.75.75 0 0 0-1.03-.002L9.264 4.801A.75.75 0 0 1 8.237 3.71l2.224-2.095a2.25 2.25 0 0 1 3.09.005l2.207 2.091A.75.75 0 1 1 14.726 4.8zM4.771 8.203a.75.75 0 0 1 .031 1.06L2.71 11.487a.75.75 0 0 0 .001 1.03l2.092 2.207a.75.75 0 0 1-1.089 1.032L1.622 13.55a2.25 2.25 0 0 1-.005-3.09l2.094-2.224a.75.75 0 0 1 1.06-.032m14.456.012a.75.75 0 0 1 1.06.028l2.099 2.213a2.25 2.25 0 0 1 0 3.097l-2.099 2.213a.75.75 0 0 1-1.088-1.032l2.098-2.213a.75.75 0 0 0 0-1.033L19.2 9.275a.75.75 0 0 1 .028-1.06m-3.434 11.013a.75.75 0 0 1-.028 1.06l-2.212 2.098a2.25 2.25 0 0 1-3.095 0l-2.216-2.098A.75.75 0 0 1 9.275 19.2l2.215 2.098a.75.75 0 0 0 1.032 0l2.212-2.097a.75.75 0 0 1 1.06.028M9.75 7A2.75 2.75 0 0 0 7 9.75v4.5A2.75 2.75 0 0 0 9.75 17h4.5A2.75 2.75 0 0 0 17 14.25v-4.5A2.75 2.75 0 0 0 14.25 7z"></svg:path>`,
})
export class FluentZoomFit24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
