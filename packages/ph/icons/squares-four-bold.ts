import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSquaresFourBoldIcon],svg[ph-squares-four-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 36H56a20 20 0 0 0-20 20v44a20 20 0 0 0 20 20h44a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 60H60V60h36Zm104-60h-44a20 20 0 0 0-20 20v44a20 20 0 0 0 20 20h44a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 60h-36V60h36Zm-96 40H56a20 20 0 0 0-20 20v44a20 20 0 0 0 20 20h44a20 20 0 0 0 20-20v-44a20 20 0 0 0-20-20m-4 60H60v-36h36Zm104-60h-44a20 20 0 0 0-20 20v44a20 20 0 0 0 20 20h44a20 20 0 0 0 20-20v-44a20 20 0 0 0-20-20m-4 60h-36v-36h36Z"></svg:path>`,
})
export class PhSquaresFourBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
