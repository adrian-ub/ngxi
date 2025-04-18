import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiTargetSolidIcon],svg[mynaui-target-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.75a8.25 8.25 0 1 0 0 16.5a8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M12 7.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9M6 12a6 6 0 1 1 12 0a6 6 0 0 1-12 0m3.75 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path>`,
})
export class MynauiTargetSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
