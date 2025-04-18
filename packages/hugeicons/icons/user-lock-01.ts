import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserLock01Icon],svg[hugeicons-user-lock-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.5 22H6.59c-1.545 0-2.774-.752-3.877-1.803c-2.26-2.153 1.45-3.873 2.865-4.715a10.67 10.67 0 0 1 7.922-1.187m3-7.795a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m.26 9.878c-1.08 0-1.543.78-1.663 1.26c-.12.479-.12 2.218-.048 2.938c.24.899.84 1.27 1.428 1.39c.54.049 2.82.03 3.48.03c.96.019 1.68-.341 1.98-1.42c.06-.36.12-2.34-.03-2.939c-.318-.96-1.041-1.259-1.641-1.259m-3.506 0h3.506m-3.506 0s-.002-.826 0-1.26c0-.398-.034-.78.156-1.13c.71-1.413 2.75-1.27 3.254.17c.087.237.093.612.09.96c-.003.442.006 1.26.006 1.26" color="currentColor"></svg:path>`,
})
export class HugeiconsUserLock01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
