import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPresentation02Icon],svg[hugeicons-presentation-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 17h18V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2H9c-2.828 0-4.243 0-5.121.879C3 3.757 3 5.172 3 8zm-1 0h20M7 22l5-3l5 3m-5-4.803V22" color="currentColor"></svg:path>`,
})
export class HugeiconsPresentation02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
