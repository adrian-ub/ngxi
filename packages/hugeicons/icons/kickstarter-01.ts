import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKickstarter01Icon],svg[hugeicons-kickstarter-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5.7v12.6C4 19.791 5.343 21 7 21s3-1.209 3-2.7v-4.288l4.542 5.836c.95 1.222 2.821 1.519 4.178.664c1.358-.856 1.688-2.54.737-3.76L15.761 12l3.696-4.751c.95-1.222.62-2.905-.737-3.76c-1.357-.856-3.228-.559-4.178.663l-4.541 5.836V5.7C10 4.209 8.656 3 7 3C5.342 3 4 4.209 4 5.7" color="currentColor"></svg:path>`,
})
export class HugeiconsKickstarter01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
