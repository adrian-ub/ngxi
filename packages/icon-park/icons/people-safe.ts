import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPeopleSafeIcon],svg[icon-park-people-safe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 9.25564L24.0086 4L42 9.25564V20.0337C42 31.3622 34.7502 40.4194 24.0026 44.0005C13.2521 40.4195 6 31.36 6 20.0287V9.25564Z"></svg:path><svg:circle cx="24" cy="18" r="5" fill="#2F88FF" stroke-linecap="round"></svg:circle><svg:path stroke-linecap="round" d="M32 31C32 26.5817 28.4183 23 24 23C19.5817 23 16 26.5817 16 31"></svg:path></svg:g>`,
})
export class IconParkPeopleSafeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
