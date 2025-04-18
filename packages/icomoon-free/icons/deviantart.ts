import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeDeviantartIcon],svg[icomoon-free-deviantart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.953 2.909V0h-2.909l-.291.294L8.378 2.91l-.431.291h-4.9v3.994h2.694l.241.291l-2.934 5.606v2.909h2.909l.291-.294l1.375-2.616l.431-.291h4.9V8.806H10.26l-.241-.294z"></svg:path>`,
})
export class IcomoonFreeDeviantartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
