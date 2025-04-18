import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBowTieIcon],svg[hugeicons-bow-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 9.502c-1-1-3.979-3.723-5.34-3.488c-3.547.613-3.547 11.363 0 11.976c1.361.235 4.34-2.487 5.34-3.488m4-5c1-1 3.979-3.723 5.34-3.488c3.547.613 3.547 11.363 0 11.976c-1.361.235-4.34-2.487-5.34-3.488"></svg:path><svg:path d="M9.5 12.002c0-2.099.622-3 2.5-3c1.749 0 2.5.746 2.5 3c0 2.099-.622 3-2.5 3s-2.5-.901-2.5-3m-.5 0H8m8 0h-1"></svg:path></svg:g>`,
})
export class HugeiconsBowTieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
