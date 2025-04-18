import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditBombDeleteBombRemoveIcon],svg[streamline-interface-edit-bomb-delete-bomb-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="6.5" cy="7.5" r="6"></svg:circle><svg:path d="m13.5.5l-2.76 2.76M3.5 7.5a3 3 0 0 1 3-3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditBombDeleteBombRemoveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
