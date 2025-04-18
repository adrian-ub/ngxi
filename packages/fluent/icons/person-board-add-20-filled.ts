import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonBoardAdd20FilledIcon],svg[fluent-person-board-add-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h3.022a5.6 5.6 0 0 1 .264-2.255q-.14.005-.288.005c-3.357 0-3.498-1.929-3.498-2.5a1 1 0 0 1 1-1h5a1 1 0 0 1 .676.263A5.5 5.5 0 0 1 15 9.023V6a3 3 0 0 0-3-3zm4.75 3.25a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0M5.764 16h3.443q.149.524.393 1H8a3 3 0 0 1-2.236-1M17 8v1.6a5.5 5.5 0 0 0-1-.393V5.764c.614.55 1 1.348 1 2.236m2 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z"></svg:path>`,
})
export class FluentPersonBoardAdd20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
