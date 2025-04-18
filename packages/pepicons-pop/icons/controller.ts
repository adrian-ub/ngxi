import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopControllerIcon],svg[pepicons-pop-controller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.25 10a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m2 2.5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5"></svg:path><svg:path fill-rule="evenodd" d="M14.5 4h-9a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5m-12 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path><svg:path d="M4 11a1 1 0 1 1 0-2h4a1 1 0 0 1 0 2z"></svg:path><svg:path d="M7 12a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0z"></svg:path></svg:g>`,
})
export class PepiconsPopControllerIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
