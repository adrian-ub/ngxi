import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePlayList9SolidIcon],svg[streamline-play-list-9-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.031 1.924a1 1 0 0 1 1-1h8.71a1 1 0 0 1 1 1v1.114H4.259a2.25 2.25 0 0 0-2.25 2.25v4.424h-.977a1 1 0 0 1-1-1V1.924Zm3.227 3.364a1 1 0 0 1 1-1h8.71a1 1 0 0 1 1 1v6.788a1 1 0 0 1-1 1h-8.71a1 1 0 0 1-1-1zm3.674 1.593a.5.5 0 0 1 .765-.424l2.882 1.801a.5.5 0 0 1 0 .848l-2.882 1.801a.5.5 0 0 1-.765-.424z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePlayList9SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
