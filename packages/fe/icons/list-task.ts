import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feListTaskIcon],svg[fe-list-task-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 13h10a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m0 4h10a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m6-8h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2m-7.257 1.914L4 7.172l1.414-1.415l2.329 2.329L12.828 3l1.415 1.414z"></svg:path>`,
})
export class FeListTaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
