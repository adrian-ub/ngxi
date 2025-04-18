import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirAlignBottomBoxSolidIcon],svg[iconoir-align-bottom-box-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m4 8l.01.01M4 4l.01.01M8 4l.01.01M12 4l.01.01M16 4l.01.01M20 4l.01.01M20 8l.01.01"></svg:path><svg:path fill="currentColor" d="M4 12v8h16v-8z"></svg:path></svg:g>`,
})
export class IconoirAlignBottomBoxSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
