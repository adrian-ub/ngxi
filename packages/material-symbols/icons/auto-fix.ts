import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAutoFixIcon],svg[material-symbols-auto-fix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 7l-.95-2.05L17 4l2.05-.95L20 1l.95 2.05L23 4l-2.05.95L20 7ZM8.5 7l-.95-2.05L5.5 4l2.05-.95L8.5 1l.95 2.05L11.5 4l-2.05.95L8.5 7ZM20 18.5l-.95-2.05L17 15.5l2.05-.95l.95-2.05l.95 2.05l2.05.95l-2.05.95L20 18.5ZM5.1 21.7l-2.8-2.8q-.3-.3-.3-.725t.3-.725L13.45 6.3q.3-.3.725-.3t.725.3l2.8 2.8q.3.3.3.725t-.3.725L6.55 21.7q-.3.3-.725.3t-.725-.3Zm9.075-10.475l1.4-1.4l-1.4-1.4l-1.4 1.4l1.4 1.4Z"></svg:path>`,
})
export class MaterialSymbolsAutoFixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
