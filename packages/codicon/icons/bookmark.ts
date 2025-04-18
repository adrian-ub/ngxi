import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconBookmarkIcon],svg[codicon-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 1h-9l-.5.5v13l.872.335L8 10.247l4.128 4.588L13 14.5v-13zM12 13.2L8.372 9.165h-.744L4 13.2V2h8z"></svg:path>`,
})
export class CodiconBookmarkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
