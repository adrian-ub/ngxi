import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenStampFill12Icon],svg[garden-stamp-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m1.75-8.25a2.25 2.25 0 1 1 3.9 1.53c-.088.324-.15.662-.15.97c0 .427.04.87.087 1.25H8.75A2.25 2.25 0 0 1 11 8.25a.75.75 0 0 1-.75.75h-8.5A.75.75 0 0 1 1 8.25A2.25 2.25 0 0 1 3.25 6h1.163c.047-.38.087-.823.087-1.25c0-.308-.062-.646-.15-.97a2.24 2.24 0 0 1-.6-1.53"></svg:path>`,
})
export class GardenStampFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
