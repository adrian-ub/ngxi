import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEthereumCircleSolidIcon],svg[streamline-ethereum-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0M7 2.5a.5.5 0 0 1 .384.18l2.5 3a.5.5 0 0 1-.072.71l-2.5 2a.5.5 0 0 1-.624 0l-2.5-2a.5.5 0 0 1-.072-.71l2.5-3A.5.5 0 0 1 7 2.5M4.89 8.512a.625.625 0 1 0-.78.976l2.5 2a.625.625 0 0 0 .78 0l2.5-2a.625.625 0 1 0-.78-.976L7 10.2z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineEthereumCircleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
