import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsEditDuotoneIcon],svg[lets-icons-edit-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" d="m13.5 5.5l-7.047 7.047c-.225.225-.337.337-.408.476c-.072.139-.098.296-.15.61l-.78 4.677c-.052.314-.079.472.012.563s.249.064.563.012l4.678-.78c.313-.052.47-.078.61-.15c.138-.071.25-.183.475-.408L18.5 10.5c1.017-1.017 1.526-1.526 1.638-2.137c.045-.24.045-.486 0-.726c-.112-.611-.62-1.12-1.638-2.137s-1.526-1.526-2.137-1.638a2 2 0 0 0-.726 0c-.611.112-1.12.62-2.137 1.638"></svg:path><svg:path fill="currentColor" d="m12.293 6.707l-5.84 5.84c-.225.225-.337.337-.408.476c-.072.139-.098.296-.15.61l-.78 4.677c-.052.314-.079.472.012.563s.249.064.563.012l4.678-.78c.313-.052.47-.078.61-.15c.138-.071.25-.183.475-.408l5.84-5.84c.333-.333.5-.5.5-.707s-.167-.374-.5-.707l-3.586-3.586c-.333-.333-.5-.5-.707-.5s-.374.167-.707.5"></svg:path>`,
})
export class LetsIconsEditDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
