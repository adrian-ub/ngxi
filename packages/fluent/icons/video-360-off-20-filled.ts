import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideo360Off20FilledIcon],svg[fluent-video-360-off-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.854 2.146a.5.5 0 1 0-.708.708l1.185 1.184A1.7 1.7 0 0 0 2 5.698v8.604c0 1.047.937 1.844 1.97 1.677a38 38 0 0 1 11.17-.132l2.006 2.007a.5.5 0 0 0 .708-.708zm11.14 12.556a39 39 0 0 0-.994-.09v-.905zM12 12.707v1.84a39 39 0 0 0-4 0V12a1 1 0 0 1 1-1h1.293zm-8 2.255V13a1 1 0 0 1 1-1h2v2.612a39 39 0 0 0-3 .35M5.5 11a1 1 0 1 1 0-2a1 1 0 0 1 0 2m8.621 1L6.46 4.338c3.188.3 6.404.194 9.572-.317A1.7 1.7 0 0 1 18 5.698v8.604c0 .442-.167.84-.438 1.139L16 13.879v-.88a1 1 0 0 0-1-1zm.379-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class FluentVideo360Off20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
