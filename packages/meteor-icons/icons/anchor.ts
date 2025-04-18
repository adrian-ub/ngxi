import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAnchorIcon],svg[meteor-icons-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="5" r="3"></svg:circle><svg:path d="M12 22V8m-9 5v4a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-4M1 15l2-2l2 2m14 0l2-2l2 2"></svg:path></svg:g>`,
})
export class MeteorIconsAnchorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
