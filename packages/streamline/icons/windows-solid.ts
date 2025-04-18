import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWindowsSolidIcon],svg[streamline-windows-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.883 1.503L5.375.987v5.148H0V2.46a1 1 0 0 1 .881-.957zM0 7.385v3.697a1.01 1.01 0 0 0 .832.99l4.543.697V7.385zm6.625 0v5.576l6.217.953a1 1 0 0 0 1.158-.98V7.385zM14 6.135V1.112a.99.99 0 0 0-1.123-.988L6.625.843v5.292z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineWindowsSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
