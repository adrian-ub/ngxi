import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHandleBIcon],svg[icon-park-outline-handle-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path d="M24.792 23C27.668 23 30 20.761 30 18s-2.332-5-5.208-5H18v10zm2.039 12C29.686 35 32 32.314 32 29s-2.314-6-5.169-6H18v12z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkOutlineHandleBIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
