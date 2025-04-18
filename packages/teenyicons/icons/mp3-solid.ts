import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMp3SolidIcon],svg[teenyicons-mp3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 8H7V7h.5a.5.5 0 0 1 0 1"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5zM7.5 6H6v5h1V9h.5a1.5 1.5 0 1 0 0-3m-4.646.146A.5.5 0 0 0 2 6.5V11h1V7.707l.5.5l.5-.5V11h1V6.5a.5.5 0 0 0-.854-.354l-.646.647zM11.5 7H10V6h2.5a.5.5 0 0 1 .4.8l-.951 1.268A1.5 1.5 0 0 1 11.5 11H10v-1h1.5a.5.5 0 0 0 0-1H11a.5.5 0 0 1-.4-.8z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsMp3SolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
