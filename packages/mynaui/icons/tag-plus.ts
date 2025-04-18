import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiTagPlusIcon],svg[mynaui-tag-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.472 5.5H14.77a2 2 0 0 1 1.396.568l5.35 5.216a1 1 0 0 1 0 1.432l-5.35 5.216a2 2 0 0 1-1.396.568H4.472c-.95 0-2.222-.541-2.222-1.625v-9.75C2.25 6.041 3.523 5.5 4.472 5.5M6 12h5M8.5 9.5v5"></svg:path>`,
})
export class MynauiTagPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
