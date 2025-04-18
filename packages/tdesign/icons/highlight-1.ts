import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHighlight1Icon],svg[tdesign-highlight-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11-5a5 5 0 0 0-4.354 2.54l-.493.871l-1.74-.985l.492-.87A7 7 0 0 1 12 5h1v2zm-4.996 4.133v2.076h-2v-2.076z"></svg:path>`,
})
export class TdesignHighlight1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
