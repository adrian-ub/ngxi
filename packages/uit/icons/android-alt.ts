import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitAndroidAltIcon],svg[uit-android-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 9a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5m12.344-4.602l1.073-1.622a.5.5 0 0 0-.834-.552l-1.06 1.602a5.95 5.95 0 0 0-6.046 0l-1.06-1.602a.5.5 0 0 0-.834.552l1.073 1.622A5.99 5.99 0 0 0 6 9v8.5a.5.5 0 0 0 .5.5h3v3.5a.5.5 0 0 0 1 0V18h3v3.5a.5.5 0 0 0 1 0V18h3a.5.5 0 0 0 .5-.5V9a5.99 5.99 0 0 0-2.156-4.602M17 17H7v-7h10zM7 9a5 5 0 0 1 10 0zm13.5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5"></svg:path>`,
})
export class UitAndroidAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
