import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSquaresFourThinIcon],svg[ph-squares-four-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 44H56a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Zm92-60h-48a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Zm-100 36H56a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Zm92-60h-48a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhSquaresFourThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
