import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiSingLeftNoteIcon],svg[iconoir-emoji-sing-left-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="1.5"><svg:path fill="currentColor" d="M2.8 8.1a.9.9 0 1 1-1.8 0a.9.9 0 0 1 1.8 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M2.8 8.1a.9.9 0 1 1-1.8 0a.9.9 0 0 1 1.8 0Zm0 0V3.6a.6.6 0 0 1 .6-.6H5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 17a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.05 13c.501 5.053 4.765 9 9.95 9c5.523 0 10-4.477 10-10S17.523 2 12 2a10 10 0 0 0-4 .832"></svg:path><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 9a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-7 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path></svg:g>`,
})
export class IconoirEmojiSingLeftNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
