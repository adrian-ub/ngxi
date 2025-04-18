import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGenderEqualitySolidIcon],svg[streamline-gender-equality-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.335.764a.75.75 0 0 1 .75-.75h2.672a.75.75 0 0 1 .75.75v2.673a.75.75 0 1 1-1.5 0v-.863l-1.39 1.39a3.856 3.856 0 0 1-2.454 5.927v.813h1.031a.75.75 0 0 1 0 1.5H7.163v1.031a.75.75 0 1 1-1.5 0v-1.031H4.63a.75.75 0 1 1 0-1.5h1.032V9.89a3.856 3.856 0 1 1 2.892-6.987l1.39-1.39h-.86a.75.75 0 0 1-.75-.75ZM4.448 4.962c0-.345.28-.625.625-.625h2.68a.625.625 0 1 1 0 1.25h-2.68a.625.625 0 0 1-.625-.625m.625 1.67a.625.625 0 0 0 0 1.25h2.68a.625.625 0 1 0 0-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGenderEqualitySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
