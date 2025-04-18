import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiAqaraH12Icon],svg[cbi-aqara-h1-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.943 2.044L17.863 2l.046 20l.994-.069a.394.394 0 0 0 .366-.391V2.383a.34.34 0 0 0-.326-.339m-1.371.046l-.772-.033h-.06l-6 .378l-.025 19.074l6.311.491h.017l.346-.022a.063.063 0 0 0 .061-.063l-.02-17.723h.224V2.175a.084.084 0 0 0-.081-.085m-12.842.862v17.917a.167.167 0 0 0 .151.164l5.575.458V2.454l-5.628.393a.1.1 0 0 0-.1.1"></svg:path>`,
})
export class CbiAqaraH12Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
