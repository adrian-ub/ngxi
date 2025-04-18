import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTextIndent01Icon],svg[hugeicons-text-indent-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.5h10m-10 5h7m-7 5h10m-10 5h7M1.998 9l1.065-1.102C3.964 6.966 4.415 6.5 4.998 6.5s1.034.466 1.935 1.398L7.998 9M8 14l-1.065 1.102C6.034 16.034 5.583 16.5 5 16.5s-1.034-.466-1.935-1.398L2 14" color="currentColor"></svg:path>`,
})
export class HugeiconsTextIndent01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
