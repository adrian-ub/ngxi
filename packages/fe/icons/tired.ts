import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feTiredIcon],svg[fe-tired-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10M8.2 10L7 8.8l.8-.8L9 9.2L10.2 8l.8.8L9.8 10l1.2 1.2l-.8.8L9 10.8L7.8 12l-.8-.8zm6 0L13 8.8l.8-.8L15 9.2L16.2 8l.8.8l-1.2 1.2l1.2 1.2l-.8.8l-1.2-1.2l-1.2 1.2l-.8-.8zM12 17a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class FeTiredIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
