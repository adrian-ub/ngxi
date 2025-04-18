import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCallRectangleLandscape20FilledIcon],svg[fluent-call-rectangle-landscape-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm1.594 4.212C7.492 7.763 8.697 7.5 10 7.5s2.508.263 3.406.712C14.273 8.646 15 9.337 15 10.25v.745a1.5 1.5 0 0 1-1.65 1.493l-.714-.072a1.5 1.5 0 0 1-1.299-1.101l-.285-1.056l-.02-.08v-.004l-.003-.013C10.959 10.12 10.709 10 10 10s-.96.12-1.029.162l-.003.013v.004l-.02.08l-.286 1.056a1.5 1.5 0 0 1-1.298 1.101l-.715.072A1.5 1.5 0 0 1 5 10.995v-.745c0-.913.727-1.604 1.594-2.038"></svg:path>`,
})
export class FluentCallRectangleLandscape20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
