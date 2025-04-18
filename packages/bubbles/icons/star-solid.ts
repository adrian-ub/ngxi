import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesStarSolidIcon],svg[bubbles-star-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.703 5.82a1 1 0 0 0-.937-.654h-4.058a.33.33 0 0 1-.315-.223L8.937.815a1 1 0 0 0-1.874 0l-.003.01l-1.453 4.118a.33.33 0 0 1-.314.223h-4.06a1 1 0 0 0-.642 1.767L4.047 9.8a.33.33 0 0 1 .104.362l-1.452 4.354a1 1 0 0 0 1.54 1.123l3.564-2.613a.33.33 0 0 1 .394 0l3.562 2.612a1 1 0 0 0 1.542-1.122l-1.452-4.357a.33.33 0 0 1 .103-.362l3.463-2.87a1 1 0 0 0 .288-1.108"></svg:path>`,
})
export class BubblesStarSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
