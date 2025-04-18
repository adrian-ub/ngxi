import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsCoffeeIcon],svg[akar-icons-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 7c4.418 0 8 .895 8 2s-3.582 2-8 2s-8-.895-8-2c0-.357.375-.693 1.033-.984"></svg:path><svg:path d="M3 9v9.343c0 1.061.44 2.08 1.409 2.513C5.624 21.399 7.711 22 11 22s5.377-.601 6.591-1.144c.968-.433 1.409-1.452 1.409-2.513V9m0 1a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3v0M7 3v4m4-5v2m4 0v3"></svg:path></svg:g>`,
})
export class AkarIconsCoffeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
