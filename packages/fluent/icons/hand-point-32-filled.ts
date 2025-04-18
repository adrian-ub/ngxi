import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHandPoint32FilledIcon],svg[fluent-hand-point-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.004 5.5a3.5 3.5 0 0 1 3.5-3.5A3.496 3.496 0 0 1 19 5.5v5.545l4.06.621c4.085.627 6.741 4.634 5.726 8.639l-1.51 5.96a4 4 0 0 1-3.279 2.972l-4.731.718c-2.086.316-3.828-1.054-4.644-2.692c-1.131-2.271-3.827-5.337-11.706-8.72c-.849-.366-1.202-1.44-.642-2.238a6.92 6.92 0 0 1 8.356-2.394l1.374.58z"></svg:path>`,
})
export class FluentHandPoint32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
