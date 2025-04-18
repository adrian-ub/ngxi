import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojionePencilIcon],svg[emojione-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffce31" d="M7.934 41.132L39.828 9.246l14.918 14.922l-31.895 31.886z"></svg:path><svg:path fill="#ed4c5c" d="m61.3 4.6l-1.9-1.9C55.8-.9 50-.9 46.3 2.7l-6.5 6.5l15 15l6.5-6.5c3.6-3.6 3.6-9.5 0-13.1"></svg:path><svg:path fill="#93a2aa" d="m35.782 13.31l4.1-4.102l14.92 14.92l-4.1 4.101z"></svg:path><svg:path fill="#c7d3d8" d="m37.338 14.865l4.1-4.101l11.739 11.738l-4.102 4.1z"></svg:path><svg:path fill="#fed0ac" d="m7.9 41.1l-6.5 17l4.5 4.5l17-6.5z"></svg:path><svg:path fill="#333" d="M.3 61.1c-.9 2.4.3 3.5 2.7 2.6l8.2-3.1l-7.7-7.7z"></svg:path><svg:path fill="#ffdf85" d="m7.89 41.175l27.86-27.86l4.95 4.95l-27.86 27.86z"></svg:path><svg:path fill="#ff8736" d="m17.904 51.142l27.86-27.86l4.95 4.95l-27.86 27.86z"></svg:path>`,
})
export class EmojionePencilIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
