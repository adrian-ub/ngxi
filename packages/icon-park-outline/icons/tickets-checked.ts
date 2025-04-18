import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTicketsCheckedIcon],svg[icon-park-outline-tickets-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M34 30v-1.011A2.99 2.99 0 0 1 36.989 26v0a2.99 2.99 0 0 1 2.989 2.985l.012 8.2A6.805 6.805 0 0 1 33.185 44h-7.538a13.93 13.93 0 0 1-11.192-5.637l-4.265-5.757a2.99 2.99 0 0 1-.162-3.32v0a2.992 2.992 0 0 1 4.682-.576L16 30V16a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v11.875v-6.849A3.026 3.026 0 0 1 25.026 18v0a3.026 3.026 0 0 1 3.027 3.026V29v-1.101a2.974 2.974 0 0 1 2.973-2.974v0A2.974 2.974 0 0 1 34 27.899z"></svg:path><svg:path d="M32 4v8"></svg:path><svg:path stroke-linejoin="round" d="M16 20H6v-4c2 0 4-1.5 3.974-4S8 8 6 8V4h36v4c-2 0-3.948 1.5-3.974 4S40 16 42 16v4H28"></svg:path></svg:g>`,
})
export class IconParkOutlineTicketsCheckedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
