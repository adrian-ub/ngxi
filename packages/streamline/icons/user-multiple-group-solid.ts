import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineUserMultipleGroupSolidIcon],svg[streamline-user-multiple-group-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 4.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-3 4a5 5 0 0 0-5 5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5a5 5 0 0 0-5-5m8.5 5.5h-2.322q.071-.238.072-.5a6.24 6.24 0 0 0-2.492-4.994A5 5 0 0 1 14 13.5a.5.5 0 0 1-.5.5M9 7.5a3 3 0 0 1-.868-.127A4.24 4.24 0 0 0 9.25 4.5a4.24 4.24 0 0 0-1.118-2.873A3 3 0 1 1 9 7.5" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineUserMultipleGroupSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
