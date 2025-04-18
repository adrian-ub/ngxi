import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSubnodeDeleteIcon],svg[hugeicons-subnode-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.5 19.5h-1c-2.828 0-4.243 0-5.121-.879C7.5 17.743 7.5 16.328 7.5 13.5v-2m0-3.5v3.5m0 0h5"></svg:path><svg:path d="M14.5 19.5c0-1.178 0-1.768.351-2.134C15.204 17 15.77 17 16.9 17h1.2c1.131 0 1.697 0 2.048.366c.352.366.352.956.352 2.134s0 1.768-.352 2.134c-.35.366-.917.366-2.048.366h-1.2c-1.131 0-1.697 0-2.048-.366c-.352-.366-.352-.956-.352-2.134M5.786 2h3.428C11.29 2 11.5 3.11 11.5 5s-.211 3-2.286 3H5.786C3.71 8 3.5 6.89 3.5 5s.211-3 2.286-3M19.5 9.5l-2 2m0 0l-2 2m2-2l2 2m-2-2l-2-2"></svg:path></svg:g>`,
})
export class HugeiconsSubnodeDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
