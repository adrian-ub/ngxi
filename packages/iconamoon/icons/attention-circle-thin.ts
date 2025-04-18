import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonAttentionCircleThinIcon],svg[iconamoon-attention-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9" stroke-linecap="round"></svg:circle><svg:path stroke-width="1.5" d="M12 16h.01v.01H12z"></svg:path><svg:path stroke-linecap="round" d="M12 12V8"></svg:path></svg:g>`,
})
export class IconamoonAttentionCircleThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
