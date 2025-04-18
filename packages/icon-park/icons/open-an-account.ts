import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOpenAnAccountIcon],svg[icon-park-open-an-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 24V9C42 7.34315 40.6569 6 39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H24"></svg:path><svg:path d="M39.0508 33L39.0508 43"></svg:path><svg:path d="M44 37.9497L34 37.9497"></svg:path><svg:circle cx="24" cy="18" r="5" fill="#2F88FF"></svg:circle><svg:path d="M33 31C33 26.5817 28.9706 23 24 23C19.0294 23 15 26.5817 15 31"></svg:path></svg:g>`,
})
export class IconParkOpenAnAccountIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
