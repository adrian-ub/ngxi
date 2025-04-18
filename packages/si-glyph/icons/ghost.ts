import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphGhostIcon],svg[si-glyph-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m.008 7.91l.016 8.095L2.021 13l1.978 3.005L6.062 13l1.959 3.005L10.08 13l1.93 3.005L14.049 13l1.956 3.005l-.017-8.095C15.989 3.56 12.363.031 7.986.031S.008 3.559.008 7.91m4.508.184a1.563 1.563 0 1 1 0-3.125a1.563 1.563 0 1 1 0 3.125m6.994-.028a1.584 1.584 0 0 1-1.588-1.579c0-.873.711-1.581 1.588-1.581s1.588.708 1.588 1.581c0 .872-.71 1.579-1.588 1.579"></svg:path>`,
})
export class SiGlyphGhostIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}
