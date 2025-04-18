import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhoneSpanIn20FilledIcon],svg[fluent-phone-span-in-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2a2 2 0 0 0-2 2v3.085a1.5 1.5 0 0 1 1.56.354l2 2a1.5 1.5 0 0 1 0 2.122l-2 2a1.5 1.5 0 0 1-1.56.354V16a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2.085a1.5 1.5 0 0 1-1.56-.354l-2-2a1.5 1.5 0 0 1 0-2.122l2-2A1.5 1.5 0 0 1 15 7.085V4a2 2 0 0 0-2-2zm7.854 6.146a.5.5 0 0 1 0 .708L13.707 10H16.5a.5.5 0 0 1 0 1h-2.792l1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708 0m-9.708.708a.5.5 0 1 1 .707-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.707-.708L6.292 11H3.5a.5.5 0 0 1 0-1h2.792z"></svg:path>`,
})
export class FluentPhoneSpanIn20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
