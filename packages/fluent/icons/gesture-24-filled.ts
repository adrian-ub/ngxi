import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGesture24FilledIcon],svg[fluent-gesture-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18a1 1 0 1 1 0 2a1 1 0 0 1 0-2M7 4h10a1 1 0 0 1 .117 1.993L17 6h-4.649l8.01 3.102c.77.298.855 1.33.195 1.764l-.11.064l-14 6.965a1 1 0 0 1-.993-1.732l.102-.058l11.97-5.956L6.64 5.933c-.994-.386-.766-1.821.241-1.927zh10zm13 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class FluentGesture24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
