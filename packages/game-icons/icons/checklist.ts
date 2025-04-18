import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsChecklistIcon],svg[game-icons-checklist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m122.31 84.615l-2.85 8.54l-11.394 34.185l-5.703-5.703L96 115.27L83.27 128l6.367 6.363l26.297 26.297l20.605-61.814l2.845-8.537l-17.076-5.695zM151 119v18h242v-18zm0 64v18h242v-18zm0 64v18h242v-18zm-28.69 29.615l-2.85 8.54l-11.394 34.185l-5.703-5.703L96 307.27L83.27 320l6.367 6.363l26.297 26.297l20.605-61.814l2.845-8.537l-17.076-5.695zM151 311v18h242v-18zm0 64v18h242v-18z"></svg:path>`,
})
export class GameIconsChecklistIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
