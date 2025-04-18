import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdPixelfedTwotoneIcon],svg[line-md-pixelfed-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M11.21 14.18h1.83c1.73 0 3.13 -1.36 3.13 -3.05c0 -1.68 -1.4 -3.05 -3.13 -3.05h-2.65c-1 0 -1.81 0.79 -1.81 1.76v6.84l2.62 -2.51Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.75s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path>`,
})
export class LineMdPixelfedTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
