import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLiftSolidIcon],svg[streamline-lift-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.554 4.061a2.03 2.03 0 1 0 0-4.061a2.03 2.03 0 0 0 0 4.061m8.047-.968a.5.5 0 0 0-.707 0L8.642 5.345a.5.5 0 0 0 .354.853H13.5a.5.5 0 0 0 .354-.853L11.6 3.093ZM8.534 9.11a.5.5 0 0 1 .462-.308H13.5a.5.5 0 0 1 .354.853L11.6 11.907a.5.5 0 0 1-.707 0L8.642 9.655a.5.5 0 0 1-.108-.545M6.067 5.903a3.55 3.55 0 0 1 1.04 2.512V9.44a.5.5 0 0 1-.5.5H5.585l-.452 3.623a.5.5 0 0 1-.497.438H2.472a.5.5 0 0 1-.496-.438L1.523 9.94H.5a.5.5 0 0 1-.5-.5V8.415a3.554 3.554 0 0 1 6.067-2.512" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineLiftSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
