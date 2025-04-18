import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenEyeStroke16Icon],svg[garden-eye-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="8" cy="8" r="2.5"></svg:circle><svg:path stroke-linecap="round" d="M15.42 8.29c.12-.18.12-.4 0-.58c-.7-1-3.28-4.21-7.42-4.21S1.28 6.71.58 7.71c-.12.18-.12.4 0 .58c.7 1 3.28 4.21 7.42 4.21s6.72-3.21 7.42-4.21z"></svg:path></svg:g>`,
})
export class GardenEyeStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
