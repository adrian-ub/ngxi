import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsPassThrough16Icon],svg[qlementine-icons-pass-through-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.541C5.801 0 6.034 0 6.5 0s.7 0 .883.076c.245.101.44.296.541.541C8 .801 8 1.034 8 1.5V5H5zm0 13V11h3v3.5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.541C7.199 16 6.966 16 6.5 16s-.7 0-.883-.076a1 1 0 0 1-.541-.541C5 15.199 5 14.966 5 14.5"></svg:path><svg:path fill="currentColor" d="M11.1 3.15a.5.5 0 0 1 .707 0l4 4a.5.5 0 0 1 0 .707l-4 4a.5.5 0 0 1-.707-.707L14.25 8H.45a.5.5 0 0 1 0-1h13.8L11.1 3.85a.5.5 0 0 1 0-.707z"></svg:path>`,
})
export class QlementineIconsPassThrough16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
