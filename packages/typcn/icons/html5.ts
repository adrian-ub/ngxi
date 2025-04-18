import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnHtml5Icon],svg[typcn-html5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.1 3.5l.7 1.1l.7-1.1V5h1V2h-1l-.7 1.1l-.6-1.1h-1.1v3h1zM18.4 5V4H17V2h-1v3zM9.8 5h1V3h.9V2H8.9v1h.9zM6.6 4h.9v1h1V2h-1v1h-.9V2h-1v3h1zM5 6l1.2 14.4L12 22l5.8-1.6L19 6zm11.3 4.6H9.5l.2 1.8h6.4l-.5 5.5l-3.6 1l-3.6-1l-.3-2.9h1.8l.1 1.5l2 .5l2-.5l.2-2.3H8l-.5-5.3h9z"></svg:path>`,
})
export class TypcnHtml5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
