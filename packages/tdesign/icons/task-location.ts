import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskLocationIcon],svg[tdesign-task-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 0v2h7V0h2v2H21v8.5h-2V9H5v12h9v2H3V2h3.5V0zM5 7h14V4H5zm13.75 7A2.75 2.75 0 0 0 16 16.75c0 1.252.735 2.454 1.615 3.422c.407.448.817.814 1.135 1.075c.318-.26.728-.627 1.135-1.075c.88-.968 1.615-2.17 1.615-3.422A2.75 2.75 0 0 0 18.75 14m0 9.701c-.25-.167-.506-.329-.75-.506a13 13 0 0 1-1.865-1.677C15.14 20.424 14 18.75 14 16.75a4.75 4.75 0 1 1 9.5 0c0 2.001-1.14 3.674-2.135 4.768a13 13 0 0 1-1.865 1.677c-.244.177-.5.339-.75.506M17.5 16H20v2h-2.5z"></svg:path>`,
})
export class TdesignTaskLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
