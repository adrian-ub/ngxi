import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPenBrushFilledIcon],svg[tdesign-pen-brush-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.621 21.999H2v-3.623a3 3 0 0 1 .878-2.121l2.158-2.158l4.866 4.865l-2.158 2.158A3 3 0 0 1 5.62 22m5.695-4.452L22.53 6.332l-4.865-4.865L6.45 12.683z"></svg:path>`,
})
export class TdesignPenBrushFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
