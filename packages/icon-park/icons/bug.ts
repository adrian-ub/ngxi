import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBugIcon],svg[icon-park-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 42C36 42 38 31.5324 38 28C38 24.8379 38 20.1712 38 14H10C10 17.4423 10 22.109 10 28C10 31.4506 12 42 24 42Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 8L10 14"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 8L38 14"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 27H10"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 27H38"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M7 44L13 38"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M41 44L35 38"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 42V14"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M14.9204 39.0407C17.0024 40.783 19.9244 41.9998 23.9999 41.9998C28.1112 41.9998 31.0487 40.7712 33.1341 39.0137"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M32 12.3333C32 7.73096 28.4183 4 24 4C19.5817 4 16 7.73096 16 12.3333V14H32V12.3333Z"></svg:path></svg:g>`,
})
export class IconParkBugIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
