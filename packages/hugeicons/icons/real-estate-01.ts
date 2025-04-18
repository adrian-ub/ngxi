import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRealEstate01Icon],svg[hugeicons-real-estate-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 7.485c0-1.098 0-1.646-.276-2.11S19.939 4.609 18.922 4l-1.294-.774c-1.597-.956-2.396-1.434-3.012-1.138S14 3.245 14 4.967V22h7zM22 22H2M14 9h-4m4 6h-4M3 7.485c0-1.098 0-1.646.276-2.11S4.061 4.609 5.078 4l1.294-.774C7.97 2.269 8.768 1.79 9.384 2.087S10 3.245 10 4.967V22H3zM6.501 8h-.009m.01 4h-.01m.01 4h-.01m11.009-8h-.009m.01 4h-.01m.01 4h-.01" color="currentColor"></svg:path>`,
})
export class HugeiconsRealEstate01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
