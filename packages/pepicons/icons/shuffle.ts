import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsShuffleIcon],svg[pepicons-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3 5.75a1 1 0 0 1 1-1c3.335 0 6.5 2.126 6.5 5.25S7.335 15.25 4 15.25a1 1 0 1 1 0-2c2.74 0 4.5-1.68 4.5-3.25S6.74 6.75 4 6.75a1 1 0 0 1-1-1Z"></svg:path><svg:path d="M16 5.75a1 1 0 0 0-1-1c-3.335 0-6.5 2.126-6.5 5.25s3.165 5.25 6.5 5.25a1 1 0 1 0 0-2c-2.74 0-4.5-1.68-4.5-3.25s1.76-3.25 4.5-3.25a1 1 0 0 0 1-1Z"></svg:path><svg:path d="M16.46 14.778a.75.75 0 0 1-1.053-.133l-1.5-1.936a.75.75 0 0 1 1.186-.918l1.5 1.935a.75.75 0 0 1-.134 1.052Z"></svg:path><svg:path d="M14.05 16.785a.75.75 0 0 1-.15-1.05l1.5-2a.75.75 0 1 1 1.2.9l-1.5 2a.75.75 0 0 1-1.05.15Zm2.41-11.563a.75.75 0 0 0-1.053.133l-1.5 1.936a.75.75 0 0 0 1.186.918l1.5-1.935a.75.75 0 0 0-.134-1.052Z"></svg:path><svg:path d="M14.05 3.15a.75.75 0 0 0-.15 1.05l1.5 2a.75.75 0 1 0 1.2-.9l-1.5-2a.75.75 0 0 0-1.05-.15Z"></svg:path></svg:g>`,
})
export class PepiconsShuffleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
