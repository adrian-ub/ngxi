import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePathfinderDivideSolidIcon],svg[streamline-pathfinder-divide-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.5 0h-7A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10h1.252V5.37a2.625 2.625 0 0 1 2.625-2.625H10V1.5A1.5 1.5 0 0 0 8.5 0M10 3.995V4h.014v4.632c0 .76-.616 1.375-1.376 1.375H4.002V5.37c0-.76.616-1.375 1.375-1.375zM11.264 4H12.5A1.5 1.5 0 0 1 14 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 4 12.5v-1.243h4.638a2.625 2.625 0 0 0 2.626-2.625z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePathfinderDivideSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
