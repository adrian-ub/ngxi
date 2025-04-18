import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCornerBottomLeftIcon],svg[iconoir-corner-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4 8l.01.011M4 4l.01.011M8 4l.01.011M12 4l.01.011M16 4l.01.011M20 4l.01.011M20 8l.01.011M20 12l.01.011M20 16l.01.011M20 20l.01.011M16 20l.01.011M4 12.01v8h8v-8z"></svg:path>`,
})
export class IconoirCornerBottomLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
