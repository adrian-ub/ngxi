import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLitecoinIcon],svg[mdi-litecoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.55 15.92l.61-2.14l1.65-.59l1.44-5.56l-1.69.68L16.25 2H8l-2.62 9.77l-1.66.57l-1.5 5.57L4 17.27L2.66 22h17.5l1.62-6.08zM19.39 21H4l1.46-5.35l-1.74.65l.86-3.19l1.66-.57L8.74 3H15l-1.87 7l1.7-.7l-.83 3.12l-1.67.58l-1.11 3.91h9.28z"></svg:path>`,
})
export class MdiLitecoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
