import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintPillIcon],svg[pepicons-print-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.065 4.429a4.1 4.1 0 0 1 5.799 0l5.799 5.799a4.1 4.1 0 1 1-5.8 5.799l-5.798-5.8a4.1 4.1 0 0 1 0-5.798" clip-rule="evenodd" opacity=".2"></svg:path><svg:path fill-rule="evenodd" d="M15.85 10.192L9.484 3.828a4 4 0 0 0-5.657 5.657l6.364 6.364a4 4 0 1 0 5.657-5.657M4.535 4.536a3 3 0 0 1 4.242 0l6.364 6.364a3 3 0 1 1-4.242 4.242L4.536 8.778a3 3 0 0 1 0-4.242" clip-rule="evenodd"></svg:path><svg:path d="m13.037 7.58l-.243.97c-1.201-.3-2.223-.154-3.101.432c-.87.58-1.454 1.687-1.73 3.355l-.987-.164c.318-1.917 1.032-3.27 2.162-4.023c1.122-.748 2.434-.936 3.899-.57"></svg:path></svg:g>`,
})
export class PepiconsPrintPillIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
