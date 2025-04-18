import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalJuleIcon],svg[devicon-original-jule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5f7389" d="m39.952 70.569l19.552 15.817v25.426L24.212 83.321zM20.606 54.855L31.889 64l-11.283 9.12zm47.889 31.557l19.552-15.817l15.74 12.752l-35.292 28.491zM24.213 44.68l35.266-28.491v25.426L39.952 57.432zm83.181 10.201v18.29l-11.283-9.145zM68.495 41.614V16.188l35.266 28.491l-15.74 12.752zm45.931-1.494L66.511 1.428C65.687.81 64.845.5 63.986.5s-1.691.309-2.498.927L13.573 40.12c-1.323 1.082-1.984 2.593-1.984 4.534v38.692c0 1.94.661 3.452 1.984 4.534l47.915 38.692c.807.618 1.64.927 2.498.927s1.7-.31 2.525-.927l47.915-38.692c1.322-1.082 1.984-2.594 1.984-4.534V44.654c0-1.94-.662-3.452-1.984-4.534z"></svg:path>`,
})
export class DeviconOriginalJuleIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
