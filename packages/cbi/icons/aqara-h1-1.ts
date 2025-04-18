import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiAqaraH11Icon],svg[cbi-aqara-h1-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.943 2.044L17.863 2l.046 20l.994-.069a.394.394 0 0 0 .366-.391V2.383a.34.34 0 0 0-.326-.339m-1.371.046l-.772-.033h-.06l-11.587.71a.4.4 0 0 0-.239.1a.1.1 0 0 0-.028.02a.4.4 0 0 0-.123.288l-.2 17.65a.22.22 0 0 0 .2.219L17.026 22h.017l.346-.022a.063.063 0 0 0 .061-.063l-.02-17.723h.224V2.175a.083.083 0 0 0-.081-.085Z"></svg:path>`,
})
export class CbiAqaraH11Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
