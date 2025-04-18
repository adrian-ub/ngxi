import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLgcyIcon],svg[token-branded-lgcy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M11.28 3.012a.25.25 0 0 1 .205.247v17.487a.25.25 0 0 1-.245.252a.26.26 0 0 1-.125-.026L4.431 17.79a.247.247 0 0 1-.123-.324l6.684-14.314a.26.26 0 0 1 .293-.144zM5.454 16.226l5.517-5.918V4.416L5.454 16.22zm5.517-5.167l-6.005 6.427l6.005 2.864zm1.748-8.047a.25.25 0 0 0-.205.247v17.487c0 .087.046.17.123.216a.25.25 0 0 0 .247.01l6.684-3.183c.124-.056.18-.205.124-.324L13.007 3.151a.26.26 0 0 0-.293-.144zm5.826 13.214l-5.517-5.918V4.416l5.517 11.805zm-5.517-5.167l6.006 6.427l-6.006 2.864z"></svg:path>`,
})
export class TokenBrandedLgcyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
