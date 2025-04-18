import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumBankIcon],svg[circum-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.505 17.943v-7.581a1.49 1.49 0 0 0 1.39-1.12a1.47 1.47 0 0 0-.7-1.68l-7.45-4.3a1.52 1.52 0 0 0-1.49 0l-7.45 4.3a1.47 1.47 0 0 0-.7 1.68a1.49 1.49 0 0 0 1.45 1.12h.13v7.57h-.12a1.5 1.5 0 0 0 0 3h14.87a1.5 1.5 0 0 0 .07-2.989M4.555 9.362a.505.505 0 0 1-.25-.94l7.45-4.289a.47.47 0 0 1 .49 0L19.7 8.422a.5.5 0 0 1-.25.94Zm13.95 1v7.57H14.9v-7.57Zm-4.61 0v7.57h-3.61v-7.57Zm-4.61 0v7.57h-3.6v-7.57Zm10.15 9.57H4.565a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5h14.87a.5.5 0 0 1 .5.5a.5.5 0 0 1-.5.5"></svg:path>`,
})
export class CircumBankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
