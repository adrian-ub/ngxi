import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimRedoIcon],svg[uim-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.875 8.5h-4.5a1 1 0 0 1 0-2h3.5V3a1 1 0 0 1 2 0v4.5a1 1 0 0 1-1 1"></svg:path><svg:path fill="currentColor" d="M12 22a10 10 0 1 1 8.651-15.001a1 1 0 0 1-1.73 1.002A7.99 7.99 0 1 0 20 12a1 1 0 0 1 2 0a10.01 10.01 0 0 1-10 10"></svg:path>`,
})
export class UimRedoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
