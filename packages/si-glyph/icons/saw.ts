import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphSawIcon],svg[si-glyph-saw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.729 4.266l-1.79-2.974a.837.837 0 0 0-1.179-.016l.027 1.187L1.43 5.801L.237 5.775a.824.824 0 0 0 .015 1.171l2.992 1.778a.84.84 0 0 0 1.179.016l3.322-3.303a.824.824 0 0 0-.016-1.171M6.459 5.48L4.43 7.498c-.222.22-.631.171-.912-.107l-.82.008c-.281-.279-.33-.686-.109-.904l2.859-2.842c.224-.222.629-.174.91.106l-.008.817c.282.278.331.685.109.904m1.758 1.576L5.999 9.359l.569.594l.605-.626l1.296 1.345l-.604.626l.533.554l.604-.627l1.294 1.343l-.604.626l.535.556l.604-.626l1.293 1.343l-.604.627l.533.553l.605-.626l.297.344l-.605.626l.008.009l3.624-.923z"></svg:path>`,
})
export class SiGlyphSawIcon {
  readonly viewBox = input("0 0 16 17")
  readonly width = input("0.95em")
  readonly height = input("1em")
}
