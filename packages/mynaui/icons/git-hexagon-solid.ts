import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiGitHexagonSolidIcon],svg[mynaui-git-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 10.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></svg:path><svg:path d="m10.68 2.105l-6.61 3.8l-.002.002A2.65 2.65 0 0 0 2.75 8.198v7.603a2.64 2.64 0 0 0 1.318 2.292l.003.002l6.608 3.799h.002a2.63 2.63 0 0 0 2.639 0h.001l6.608-3.8h.003A2.65 2.65 0 0 0 21.25 15.8V8.2a2.65 2.65 0 0 0-1.318-2.292l-6.61-3.8l-.002-.002a2.63 2.63 0 0 0-2.64 0M9.354 11.25a2.751 2.751 0 0 1 5.293 0H17a.75.75 0 0 1 0 1.5h-2.354a2.751 2.751 0 0 1-5.292 0H7a.75.75 0 0 1 0-1.5z"></svg:path></svg:g>`,
})
export class MynauiGitHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
