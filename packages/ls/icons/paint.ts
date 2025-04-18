import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsPaintIcon],svg[ls-paint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M326 337h82V28h-82zm131-87l85 85c14 14 14 36 0 50L275 651c-13 14-36 14-49 0L10 435c-13-13-13-36 0-49l266-267v259h181zm74 24s67 27 67 159c0 82-9 95-9 95s128 14 128-111c0-126-186-143-186-143"></svg:path>`,
})
export class LsPaintIcon {
  readonly viewBox = input("0 0 717 662")
  readonly width = input("1.09em")
  readonly height = input("1em")
}
