import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsCursorTextIcon],svg[radix-icons-cursor-text-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 1a.5.5 0 0 0 0 1c.922 0 1.54.23 1.92.564c.373.325.58.802.58 1.436v3H5.75a.5.5 0 0 0 0 1H7v3c0 .634-.207 1.11-.58 1.436c-.38.334-.998.564-1.92.564a.5.5 0 0 0 0 1c1.078 0 1.96-.27 2.58-.811q.243-.214.42-.47q.177.256.42.47c.62.541 1.502.811 2.58.811a.5.5 0 0 0 0-1c-.922 0-1.54-.23-1.92-.564C8.206 12.111 8 11.634 8 11V8h1.25a.5.5 0 0 0 0-1H8V4c0-.634.207-1.11.58-1.436C8.96 2.23 9.577 2 10.5 2a.5.5 0 0 0 0-1c-1.078 0-1.96.27-2.58.811q-.243.214-.42.47a2.6 2.6 0 0 0-.42-.47C6.46 1.27 5.577 1 4.5 1" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsCursorTextIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
