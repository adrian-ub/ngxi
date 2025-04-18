import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLockingComputerIcon],svg[icon-park-outline-locking-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 6H9a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-4m-18 7v8"></svg:path><svg:rect width="12" height="8" x="30" y="12" rx="3"></svg:rect><svg:path d="M36 6a3 3 0 0 1 3 3v3h-6V9a3 3 0 0 1 3-3Z"></svg:path><svg:path stroke-linecap="round" d="M14 42h20"></svg:path></svg:g>`,
})
export class IconParkOutlineLockingComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
