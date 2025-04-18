import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconCodeSquare16Icon],svg[octicon-code-square-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326a.75.75 0 0 1 .215-.734L10.69 8L9.22 6.53a.75.75 0 0 1 0-1.06M6.78 6.53L5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.042.018a.75.75 0 0 1 .018 1.042"></svg:path>`,
})
export class OcticonCodeSquare16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
