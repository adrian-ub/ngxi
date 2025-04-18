import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphLouder2Icon],svg[si-glyph-louder-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(4)"><svg:ellipse cx="4.962" cy="10.954" rx="1.962" ry="1.954"></svg:ellipse><svg:path d="M8.547.014H1.465C.675.014.031.612.031 1.351v13.295c0 .737.644 1.337 1.434 1.337h7.082c.789 0 1.433-.6 1.433-1.337V1.351C9.979.611 9.336.014 8.547.014M4.986 1.948c1.144 0 2.066.927 2.066 2.069a2.066 2.066 0 1 1-4.131 0c0-1.142.926-2.069 2.065-2.069m.006 12.083a3.04 3.04 0 0 1-3.047-3.033a3.04 3.04 0 0 1 3.047-3.031a3.04 3.04 0 0 1 3.047 3.031a3.04 3.04 0 0 1-3.047 3.033"></svg:path><svg:ellipse cx="4.991" cy="3.978" rx=".991" ry=".978"></svg:ellipse></svg:g>`,
})
export class SiGlyphLouder2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
