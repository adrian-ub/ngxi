import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBrainfmIcon],svg[arcticons-brainfm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.337 30.683c-.155.909-1.157 6.125-7.272 6.125c-5.967 0-7.391-5.677-7.391-6.125c0 0-.312-1.194 1.12-.953c1.743.293 4.353.371 6.041.371c2.022 0 4.885-.148 6.134-.276c1.38-.139 1.436.461 1.368.858"></svg:path><svg:circle cx="24" cy="27.767" r="12.198" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.071 25.803a1.877 1.877 0 1 1-3.753 0a1.877 1.877 0 0 1 3.753 0m5.858 0a1.877 1.877 0 1 0 3.753 0a1.877 1.877 0 0 0-3.753 0m12.148-5.839h1.404a3.02 3.02 0 0 1 3.019 3.018v5.242a3.02 3.02 0 0 1-3.019 3.018h-1.404a1.615 1.615 0 0 1-1.614-1.614v-8.05c0-.891.723-1.614 1.614-1.614M8.924 31.243H7.519a3.02 3.02 0 0 1-3.018-3.02v-5.24a3.02 3.02 0 0 1 3.018-3.02h1.405c.89 0 1.614.724 1.614 1.615v8.05c0 .891-.723 1.615-1.615 1.614"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.11 19.964C11.19 11.34 17.3 8.034 24 8.034s12.812 3.306 15.89 11.929"></svg:path>`,
})
export class ArcticonsBrainfmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
