import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGreasePencilIcon],svg[mdi-grease-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.62 1.5c-.51 0-1.02.19-1.41.59l-6.46 6.46l4.2 4.19l6.46-6.45c.79-.79.79-2.05 0-2.83l-1.37-1.37c-.39-.4-.9-.59-1.42-.59m-8.82 8l-6.57 6.57l.7.7c-.53.47-1.04 1.01-1.55 1.52c-.78.79-.78 2.05 0 2.83s2.04.78 2.83 0c.51-.49 1.04-1.04 1.52-1.54l.7.69L14 13.7"></svg:path>`,
})
export class MdiGreasePencilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
