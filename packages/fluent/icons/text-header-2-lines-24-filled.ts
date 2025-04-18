import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextHeader2Lines24FilledIcon],svg[fluent-text-header-2-lines-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.199 3.808c-.434-.173-1.049.07-1.288.598a1 1 0 0 1-1.822-.825c.611-1.35 2.275-2.26 3.85-1.63c1.685.671 2.447 2.784 1.453 4.37c-.316.506-.742.929-1.145 1.284c-.232.204-.51.43-.764.638l-.426.35a9 9 0 0 0-.45.407h2.643a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1c0-1.372 1.035-2.316 1.767-2.934c.189-.16.357-.297.518-.427c.217-.176.42-.34.639-.533c.351-.31.609-.584.773-.846c.306-.488.072-1.224-.498-1.452M4 3a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0V7.5h3v2.495a1 1 0 1 0 2 0V3.002a1 1 0 1 0-2 0V5.5H4zM3 19a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2zm-1-4a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"></svg:path>`,
})
export class FluentTextHeader2Lines24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
