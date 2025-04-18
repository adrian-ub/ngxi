import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNThRootIcon],svg[hugeicons-n-th-root-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 7h-8.386c-1.234 0-1.649.14-1.955 1.364l-2.32 9.278c-.55 2.198-.824 3.297-1.554 3.356s-1.235-.978-2.244-3.05l-.57-1.173c-.436-.893-.653-1.34-1.092-1.46c-.662-.182-1.37.355-1.879.685m1-7V5.571m0 0C3 4.151 4.12 3 5.5 3S8 4.151 8 5.571V9M3 5.571V3" color="currentColor"></svg:path>`,
})
export class HugeiconsNThRootIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
