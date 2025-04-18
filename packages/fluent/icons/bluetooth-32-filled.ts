import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBluetooth32FilledIcon],svg[fluent-bluetooth-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2.104a1.25 1.25 0 0 1 1.35.23l7 6.5a1.25 1.25 0 0 1-.018 1.848L17.627 16l5.956 5.318a1.25 1.25 0 0 1 .018 1.848l-7 6.5a1.25 1.25 0 0 1-2.101-.916v-9.958l-4.917 4.39a1.25 1.25 0 1 1-1.666-1.864L13.873 16l-5.956-5.318a1.25 1.25 0 1 1 1.666-1.864l4.917 4.39V3.25c0-.497.295-.947.75-1.146M17 18.792v7.092l3.893-3.616zm0-5.584l3.893-3.476L17 6.117z"></svg:path>`,
})
export class FluentBluetooth32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
