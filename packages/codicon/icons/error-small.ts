import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconErrorSmallIcon],svg[codicon-error-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.177 10.105L8 8.928l-1.177 1.177l-.928-.928L7.072 8L5.895 6.823l.928-.928L8 7.072l1.177-1.177l.928.928L8.928 8l1.177 1.177z"></svg:path><svg:path d="M12 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-1 0a3 3 0 1 0-6 0a3 3 0 0 0 6 0"></svg:path></svg:g>`,
})
export class CodiconErrorSmallIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
