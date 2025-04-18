import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPerspectiveIcon],svg[hugeicons-perspective-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 12c0-2.488 0-3.732.672-4.615q.11-.146.236-.277c.764-.802 1.975-.977 4.395-1.33l2.36-.342c3.413-.496 5.12-.744 6.229.234c1.108.977 1.108 2.732 1.108 6.24v.18c0 3.508 0 5.262-1.108 6.24s-2.816.73-6.23.234l-2.359-.343c-2.42-.352-3.63-.528-4.395-1.33a3 3 0 0 1-.236-.276C4.5 15.731 4.5 14.488 4.5 12M12 22V2M2 12h20" color="currentColor"></svg:path>`,
})
export class HugeiconsPerspectiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
