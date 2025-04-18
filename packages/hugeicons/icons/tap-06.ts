import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTap06Icon],svg[hugeicons-tap-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.509 14.353V6.096c0-.821.61-1.59 1.432-1.59c.824 0 1.577.653 1.577 1.474v4.281m0 0l-.008 1.176m.008-1.176c.563-2.117 3.153-1.305 2.994.356c-.003.03 0 .738 0 .738m0 0v1.14m0-1.14c.283-1.91 3.422-1.963 3.022.95m0 0l-.023.688m.023-.688c.47-2.01 3.035-1.577 2.967.276v3.687c-.003 1.576-.31 2.33-1.125 3.279c-.16.186-.315.379-.432.595c-.428.793-.232 1.01-.303 1.85M7.51 10.414c-1.32 1.194-2.208 2.284-2.474 2.61c-.89 1.351-.664 2.237.6 4.04c.942 1.34 1.807 2.304 1.873 2.38c.673.76.613 1.263.613 2.558"></svg:path><svg:path d="M13.034 6c0-2.21-1.795-4-4.01-4a4.005 4.005 0 0 0-4.009 4"></svg:path></svg:g>`,
})
export class HugeiconsTap06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
