import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoTicketIcon],svg[fontisto-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.817 5.669l4.504 4.501l-8.15 8.15l-4.501-4.504zm-3.006 13.944l8.8-8.8a.894.894 0 0 0 .001-1.28l-5.156-5.156a.926.926 0 0 0-1.28.001l-8.8 8.8a.894.894 0 0 0-.001 1.28l5.156 5.156a.926.926 0 0 0 1.28-.001m12.663-9.073L10.556 23.473c-.332.326-.787.527-1.289.527s-.957-.201-1.289-.527L6.184 21.68a2.74 2.74 0 0 0-3.875-3.874l.001-.001l-1.781-1.794c-.326-.332-.527-.787-.527-1.289s.201-.957.527-1.289L13.448.527C13.78.201 14.235 0 14.737 0s.957.201 1.289.527l1.781 1.781a2.74 2.74 0 1 0 3.874 3.874l.001-.001l1.794 1.781c.326.332.527.787.527 1.289s-.201.957-.527 1.289z"></svg:path>`,
})
export class FontistoTicketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
