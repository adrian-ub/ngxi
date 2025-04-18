import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsDragCircleIcon],svg[system-uicons-drag-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="10.5" cy="10.5" r="8"></svg:circle><svg:path d="M6.5 8.5h8m-8 2h8m-8 2h8"></svg:path></svg:g>`,
})
export class SystemUiconsDragCircleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
