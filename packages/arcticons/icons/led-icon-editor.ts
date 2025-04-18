import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLedIconEditorIcon],svg[arcticons-led-icon-editor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="9.711" cy="24.03" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.211" ry="4.189"></svg:ellipse><svg:ellipse cx="9.711" cy="37.759" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.211" ry="4.189"></svg:ellipse><svg:ellipse cx="23.03" cy="37.759" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.211" ry="4.189"></svg:ellipse><svg:ellipse cx="36.349" cy="37.759" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.211" ry="4.189"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.782 6.052l6.718 6.636l-13.626 13.743l-7.003 1.505c-1.447.31-1.675-.4-1.514-1.223l1.325-6.778z"></svg:path>`,
})
export class ArcticonsLedIconEditorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
