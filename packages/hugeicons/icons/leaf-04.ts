import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLeaf04Icon],svg[hugeicons-leaf-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.157 15.843c-1.077-.007-2.56-.27-3.723-1.433c-2.072-2.072-1.289-5.157-1.289-5.157s1.615-.41 3.293.149a6 6 0 0 1-.052-.793C6.386 5.003 9.59 3 9.59 3s2.003 1.252 2.842 3.557c2.793-1.953 6.182-1.171 6.182-1.171s.782 3.39-1.171 6.182C19.748 12.407 21 14.41 21 14.41s-2.003 3.204-5.609 3.204a6 6 0 0 1-.793-.052c.558 1.678.149 3.293.149 3.293s-3.085.783-5.157-1.29M3 21l10-10" color="currentColor"></svg:path>`,
})
export class HugeiconsLeaf04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
