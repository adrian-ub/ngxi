import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFourFinger03Icon],svg[hugeicons-four-finger-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.892 9.356L5.474 11.96c-.322.332-.898 1.198-.967 1.991c-.073.835.679 2.031.967 2.49c.752 1.194 1.055 1.857 1.934 2.987c.478.614 1.769 1.837 3.87 1.991c1.567.115 3.128.105 3.868 0c.508-.071 1.74-.298 2.901-1.493s1.451-3.154 1.451-3.983V7.976c0-.498-.29-1.494-1.45-1.494c-1.161 0-1.451.996-1.451 1.494v3.485m-8.705 2.49V5.983c0-.498.29-1.493 1.45-1.493c1.161 0 1.452.995 1.452 1.493m0 0v4.481m0-4.48V3.992c0-.498.29-1.494 1.45-1.494c1.161 0 1.451.996 1.451 1.494v1.991m0 0v4.481m0-4.48c0-.499.29-1.494 1.45-1.494c1.162 0 1.452.995 1.452 1.493v2.49" color="currentColor"></svg:path>`,
})
export class HugeiconsFourFinger03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
