import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixNoteIcon],svg[ix-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 343.045L343.045 448H64V64h384zm-42.667-65.712V106.667H106.667v298.666h170.666v-128zm0 42.667H320v85.333h5.333l80-80z"></svg:path>`,
})
export class IxNoteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
