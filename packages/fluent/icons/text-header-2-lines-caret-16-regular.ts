import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextHeader2LinesCaret16RegularIcon],svg[fluent-text-header-2-lines-caret-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.955 3.536c.194-.426.683-.62 1.056-.504c.457.141.708.802.406 1.282a3.3 3.3 0 0 1-.564.637c-.145.133-.275.244-.411.36c-.111.095-.227.193-.357.31C7.59 6.062 7 6.66 7 7.499a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H8.167c.124-.19.317-.394.584-.632c.088-.079.196-.171.31-.268c.158-.137.328-.283.468-.412c.263-.242.531-.518.734-.84c.608-.965.207-2.411-.957-2.77c-.858-.266-1.86.165-2.261 1.045a.5.5 0 1 0 .91.414M2.002 2.5a.5.5 0 1 0-1 0v5.005a.5.5 0 1 0 1 0V5.5h3v2a.5.5 0 0 0 1 0v-5a.5.5 0 1 0-1 0v2.001h-3zM1 10.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m0 2.998a.5.5 0 0 1 .5-.5h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1-.5-.5m11.038-9.189A.5.5 0 0 1 12.501 4h2.001a.5.5 0 0 1 .354.855l-1 1a.5.5 0 0 1-.708 0l-1.001-1a.5.5 0 0 1-.109-.546"></svg:path>`,
})
export class FluentTextHeader2LinesCaret16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
