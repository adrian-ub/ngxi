import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSteeringIcon],svg[hugeicons-steering-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M18.918 10.413c-.969.424-2.433.805-3.758.304C13.264 10 12.29 10 12 10s-1.264 0-3.16.717c-1.325.501-2.79.12-3.758-.305M19 13.256c-2.145.408-5.392 1.623-5.476 5.745m-3.048 0c-.084-4.122-3.33-5.337-5.476-5.745M12.008 13h-.009"></svg:path></svg:g>`,
})
export class HugeiconsSteeringIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
