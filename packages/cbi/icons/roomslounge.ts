import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiRoomsloungeIcon],svg[cbi-roomslounge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 17c3.313 0 6 .687 6 4a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-4 0v-1H8v1a2 2 0 0 1-4 0v-1H3a1 1 0 0 1-1-1c0-.053.014-.103.016-.155c-.002-.028-.016-.05-.016-.077v-6.861C2 12.858 2.858 12 3.907 12h.186C5.142 12 6 12.858 6 13.907V17zM4.093 10h-.186c-.598 0-1.399.194-1.907.436C2.795 7.357 5.801 5 10.48 5c4.481 0 7.29 2.117 8.52 5h5.349A3.65 3.65 0 0 1 28 13.651v.436a.91.91 0 0 1-.913.913H8v-1.093A3.91 3.91 0 0 0 4.093 10"></svg:path>`,
})
export class CbiRoomsloungeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
