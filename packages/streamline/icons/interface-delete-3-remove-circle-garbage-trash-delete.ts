import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDelete3RemoveCircleGarbageTrashDeleteIcon],svg[streamline-interface-delete-3-remove-circle-garbage-trash-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="m2.4 11.6l9.2-9.2m0 9.2L2.4 2.4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceDelete3RemoveCircleGarbageTrashDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
