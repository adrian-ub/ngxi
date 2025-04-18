import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsFullTrashIcon],svg[flat-color-icons-full-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF8A65" d="M24 21.3L12.7 10L26 1.7L38.3 10z"></svg:path><svg:path fill="#FFAB91" d="M24 21.3L12.7 10L17 4.7L38.3 10z"></svg:path><svg:path fill="#B39DDB" d="M30.6 44H17.4c-2 0-3.7-1.4-4-3.4L9 11h30l-4.5 29.6c-.3 2-2 3.4-3.9 3.4"></svg:path><svg:path fill="#7E57C2" d="M38 13H10c-1.1 0-2-.9-2-2s.9-2 2-2h28c1.1 0 2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class FlatColorIconsFullTrashIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
