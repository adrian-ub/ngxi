import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBikeDockIcon],svg[material-symbols-bike-dock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-2l4.25-1.225l1.55-13q.1-.75.65-1.263T10.775 3h2.45q.775 0 1.325.512t.65 1.263l1.55 13L21 19v2zm8-3h2V6q0-.425-.288-.712T12 5t-.712.288T11 6z"></svg:path>`,
})
export class MaterialSymbolsBikeDockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
