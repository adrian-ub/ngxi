import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsMenuIcon],svg[ls-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 128h578c25 0 44-19 44-44c0-24-19-43-44-43H44C19 41 0 60 0 84c0 25 19 44 44 44m0 175h578c25 0 44-19 44-44c0-24-19-43-44-43H44c-25 0-44 19-44 43c0 25 19 44 44 44m0 175h578c25 0 44-19 44-43c0-25-19-44-44-44H44c-25 0-44 19-44 44c0 24 19 43 44 43m0 175h578c25 0 44-19 44-43c0-25-19-44-44-44H44c-25 0-44 19-44 44c0 24 19 43 44 43"></svg:path>`,
})
export class LsMenuIcon {
  readonly viewBox = input("0 0 666 653")
  readonly width = input("1.02em")
  readonly height = input("1em")
}
