import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamRubberIcon],svg[jam-rubber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.728 12.728L8.485 8.485l-5.657 5.657l2.122 2.121a3 3 0 0 0 4.242 0zM11.284 17H14a1 1 0 0 1 0 2H3a1 1 0 0 1-.133-1.991l-1.453-1.453a2 2 0 0 1 0-2.828L12.728 1.414a2 2 0 0 1 2.828 0L19.8 5.657a2 2 0 0 1 0 2.828z"></svg:path>`,
})
export class JamRubberIcon {
  readonly viewBox = input("-1.5 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
