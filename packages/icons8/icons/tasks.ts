import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8TasksIcon],svg[icons8-tasks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v6h22V5zm6 2h14v2H11zm-6 6v6h22v-6zm16 2h4v2h-4zM5 21v6h22v-6zm11 2h9v2h-9z"></svg:path>`,
})
export class Icons8TasksIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
