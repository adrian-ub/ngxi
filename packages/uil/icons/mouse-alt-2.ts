import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilMouseAlt2Icon],svg[uil-mouse-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a7 7 0 0 0-7 7v6a7 7 0 0 0 14 0V9a7 7 0 0 0-7-7m5 13a5 5 0 0 1-10 0V9a5 5 0 0 1 4-4.9V12a1 1 0 0 0 2 0V4.1A5 5 0 0 1 17 9Z"></svg:path>`,
})
export class UilMouseAlt2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
