import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAutoIcon],svg[token-branded-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#E9595C" d="m6.73 15.965l3.023-1.894l5.376 3.197l-3.01 1.934z"></svg:path><svg:path fill="#109E92" d="M11.166 5.366L5.958 8.523v6.094l5.209-3.03z"></svg:path><svg:path fill="#000" d="m19.58 14.94l-3.316-2.074v-1.783l1.421.757V8.57l-4.737-3.08v6.982l-1.415.807l6.723 4.023L12 21l-7.58-4.48V7.56L12 3l7.58 4.56zM6.315 8.571v5.83l4.736-2.88V5.61zm3.469 5.71l-2.798 1.727L12 18.97l2.832-1.675z"></svg:path></svg:g>`,
})
export class TokenBrandedAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
