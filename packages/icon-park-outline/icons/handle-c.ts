import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHandleCIcon],svg[icon-park-outline-handle-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path d="M32 17.618c-.898-1.83-3.593-5.031-8.983-4.574c-5.39.458-9.433 5.49-8.983 11.893S19.424 35 23.915 35C29.305 35 32 30.609 32 30.609"></svg:path></svg:g>`,
})
export class IconParkOutlineHandleCIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
