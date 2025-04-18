import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHandleCIcon],svg[icon-park-handle-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" d="M32 17.6183C31.1017 15.7887 28.4068 12.5867 23.0171 13.0442C17.6273 13.5017 13.5842 18.5332 14.0342 24.937C14.4842 31.3407 19.4239 35 23.9154 35C29.3051 35 32 30.6089 32 30.6089"></svg:path></svg:g>`,
})
export class IconParkHandleCIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
