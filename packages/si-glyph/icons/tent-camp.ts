import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphTentCampIcon],svg[si-glyph-tent-camp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.021 14.023c-2.701-1.25-5.112-7.249-6.289-10.164l1.205-2.284a.355.355 0 0 0-.1-.454c-.138-.094-.316-.043-.4.114L9.436 3.132c-.225-.542-.375-.871-.436-.871c-.06 0-.207.319-.426.847L7.563 1.192c-.084-.157-.264-.208-.4-.114a.355.355 0 0 0-.1.454l1.215 2.302C7.107 6.733 4.699 12.739 2 14.013V12.02H1V15h4.666C8.268 13.082 9 6.926 9 6.926s.943 6.156 3.334 8.074L17 14.997V12.02h-.979z"></svg:path>`,
})
export class SiGlyphTentCampIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
