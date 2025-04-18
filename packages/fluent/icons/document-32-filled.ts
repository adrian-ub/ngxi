import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocument32FilledIcon],svg[fluent-document-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H8.25A3.25 3.25 0 0 0 5 5.25v21.5A3.25 3.25 0 0 0 8.25 30h15.5A3.25 3.25 0 0 0 27 26.75V13h-7.75A3.25 3.25 0 0 1 16 9.75zm10.863 9a3.25 3.25 0 0 0-.815-1.366l-6.682-6.682A3.25 3.25 0 0 0 18 2.136V9.75c0 .69.56 1.25 1.25 1.25z"></svg:path>`,
})
export class FluentDocument32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
