import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceOfficePodIcon],svg[guidance-office-pod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8.5 15V9.5h-.676a3 3 0 0 0-2.905 2.25L3.5 17.25v.25H11v1.456c0 1.24 0 2.044.554 3.305c0 0 .62 1.239 1.446 1.239m-4 0H3.5a3 3 0 0 1-3-3v-17a3 3 0 0 1 3-3h17a3 3 0 0 1 3 3v17a3 3 0 0 1-3 3h-4v-9m-4.5 0h9m-12.613-7s-1.201-.75-1.201-1.687a1.313 1.313 0 0 1 2.625 0C9.81 6.75 8.613 7.5 8.613 7.5z"></svg:path>`,
})
export class GuidanceOfficePodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
