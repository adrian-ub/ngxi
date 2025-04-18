import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenNotesStroke12Icon],svg[garden-notes-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linejoin="round" d="M7.74 6.38L5.5 6.5l.12-2.24L9.38.5l2.12 2.12z"></svg:path><svg:path stroke-linecap="round" d="M5.59 1.5H1.91a.41.41 0 0 0-.41.41v8.18a.41.41 0 0 0 .41.41h8.18a.41.41 0 0 0 .41-.41V6.41"></svg:path></svg:g>`,
})
export class GardenNotesStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
