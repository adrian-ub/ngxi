import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiSaveSolidIcon],svg[mynaui-save-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 3.75v1.897c0 .46.375.838.844.838h5.312a.84.84 0 0 0 .844-.838v-1.83a2.5 2.5 0 0 0-.57-.067zm8.813 18H6.688a3.93 3.93 0 0 1-3.938-3.927V6.176A3.93 3.93 0 0 1 6.688 2.25h8.242a3.95 3.95 0 0 1 2.783 1.15l2.383 2.374A3.92 3.92 0 0 1 21.25 8.55v9.272a3.93 3.93 0 0 1-3.937 3.927m-1.813-1.5v-4.015a.84.84 0 0 0-.844-.838H9.344a.84.84 0 0 0-.844.838v4.015z"></svg:path>`,
})
export class MynauiSaveSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
