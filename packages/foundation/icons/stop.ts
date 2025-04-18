import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationStopIcon],svg[foundation-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80.049 22.127a2.16 2.16 0 0 0-2.163-2.156c-.028 0-.054.007-.082.008H22.302c-.063-.006-.125-.019-.19-.019a2.163 2.163 0 0 0-2.163 2.163c0 .101.016.198.03.295V77.87h.001l-.001.009c0 1.194.969 2.162 2.163 2.162c.046 0 .089-.011.134-.013v.002h55.688v-.018a2.16 2.16 0 0 0 2.084-2.142h.001z"></svg:path>`,
})
export class FoundationStopIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
