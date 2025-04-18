import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTrashSimpleFillIcon],svg[ph-trash-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 56a8 8 0 0 1-8 8h-8v144a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64h-8a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M88 32h80a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhTrashSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
