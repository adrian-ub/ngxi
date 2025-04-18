import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCribIcon],svg[ic-sharp-crib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9h-8V4H8C5.79 4 4 5.79 4 8v8h4v2.93c-.61-.35-1.16-.78-1.65-1.27l-1.42 1.42C6.74 20.88 9.24 22 12 22s5.26-1.12 7.07-2.93l-1.42-1.42c-.49.49-1.05.92-1.65 1.27V16h4zm-6 10.75c-.64.16-1.31.25-2 .25s-1.36-.09-2-.25V16h4z"></svg:path>`,
})
export class IcSharpCribIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
