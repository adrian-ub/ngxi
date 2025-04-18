import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSlashIcon],svg[tdesign-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.366 2.974l-11 19.052l-1.732-1l11-19.052z"></svg:path>`,
})
export class TdesignSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
